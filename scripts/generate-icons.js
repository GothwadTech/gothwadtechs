import fs from 'fs';
import zlib from 'zlib';

// Minimal standard PNG encoder in pure Node.js
function createPNG(width, height, getPixel) {
  // getPixel(x, y) => [r, g, b, a]
  const rowSize = width * 4 + 1; // 1 filter byte per row
  const rawData = Buffer.alloc(rowSize * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter type 0 (None)
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixel(x, y, width, height);
      const pixelOffset = rowOffset + 1 + x * 4;
      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
      rawData[pixelOffset + 3] = a;
    }
  }

  const compressed = zlib.deflateSync(rawData, { level: 9 });

  // CRC32 table
  const crcTable = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) {
        c = 0xedb88320 ^ (c >>> 1);
      } else {
        c = c >>> 1;
      }
    }
    crcTable[n] = c;
  }

  function crc32(buf) {
    let crc = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function makeChunk(type, data) {
    const len = data.length;
    const buf = Buffer.alloc(12 + len);
    buf.writeUInt32BE(len, 0);
    buf.write(type, 4, 4, 'ascii');
    data.copy(buf, 8);
    const crc = crc32(buf.slice(4, 8 + len));
    buf.writeUInt32BE(crc, 8 + len);
    return buf;
  }

  // PNG Signature
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // 8 bit depth
  ihdrData[9] = 6; // Color type 6 (RGBA)
  ihdrData[10] = 0; // Compression
  ihdrData[11] = 0; // Filter
  ihdrData[12] = 0; // Interlace
  const ihdrChunk = makeChunk('IHDR', ihdrData);

  // IDAT
  const idatChunk = makeChunk('IDAT', compressed);

  // IEND
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Brand color #0494f4 -> (4, 148, 244)
function renderGothwadLogoPixel(x, y, w, h) {
  // Normalize to -1 to +1
  const nx = (x / w) * 2 - 1;
  const ny = (y / h) * 2 - 1;
  const dist = Math.sqrt(nx * nx + ny * ny);

  const bgR = 4;
  const bgG = 148;
  const bgB = 244;

  // Outer full container is #0494f4
  // Inside, there is a round emblem representing sovereign digital tech (GT / orbital speed shield)
  const circleRadius = 0.88;
  
  if (dist > circleRadius) {
    // 4 corners outside round icon -> exact theme color #0494f4
    return [bgR, bgG, bgB, 255];
  }

  // Inside the round emblem:
  // Sleek deep sovereign blue/navy circular background with bright cyan/white geometry
  const innerDist = dist / circleRadius;
  
  // Radial gradient inside circle: from dark navy (10, 25, 45) at center to deep theme blue (3, 80, 150) at edge
  let r = Math.round(10 + innerDist * (4 - 10));
  let g = Math.round(25 + innerDist * (90 - 25));
  let b = Math.round(50 + innerDist * (170 - 50));

  // Circular border glow
  if (innerDist > 0.92) {
    const t = (innerDist - 0.92) / 0.08;
    return [
      Math.round((1 - t) * 255 + t * bgR),
      Math.round((1 - t) * 255 + t * bgG),
      Math.round((1 - t) * 255 + t * bgB),
      255
    ];
  }

  // Geometric Monogram / Emblem "G" + Forward Tech Arrow in Center
  // Draw sharp stylized 'G' and Sovereign Tech Wings
  // 1. Center circular ring
  const ringDist = Math.sqrt(nx * nx + ny * ny);
  const inRing = ringDist > 0.35 && ringDist < 0.65;
  const angle = Math.atan2(ny, nx); // -PI to +PI

  // G shape: open on the right (between -0.3 and 0.2 rad)
  if (inRing && !(angle > -0.35 && angle < 0.25)) {
    // Crisp white-to-cyan gradient
    const gradT = (nx + 0.6) / 1.2;
    return [
      Math.round(255 - gradT * 50),
      Math.round(255 - gradT * 20),
      255,
      255
    ];
  }

  // G horizontal bar: nx between 0 and 0.45, ny between -0.07 and 0.07
  if (nx >= 0 && nx <= 0.48 && ny >= -0.07 && ny <= 0.07) {
    return [255, 255, 255, 255];
  }

  // High speed tech arrow pointing right in center top:
  // Stylized sovereign shield chevron
  if (nx >= -0.15 && nx <= 0.35 && Math.abs(ny + 0.18) <= 0.06 && (nx - ny) < 0.4) {
    return [4, 220, 255, 255];
  }

  // Sovereign dot / core node at (0, 0)
  const coreDist = Math.sqrt(nx * nx + ny * ny);
  if (coreDist <= 0.16) {
    return [4, 148, 244, 255]; // electric blue core
  }
  if (coreDist <= 0.10) {
    return [255, 255, 255, 255]; // white spark
  }

  return [r, g, b, 255];
}

console.log('Generating valid, uncorrupted PNG icons...');
const png512 = createPNG(512, 512, renderGothwadLogoPixel);
const png192 = createPNG(192, 192, renderGothwadLogoPixel);

fs.writeFileSync('public/icon-512.png', png512);
fs.writeFileSync('public/icon-512-maskable.png', png512);
fs.writeFileSync('public/icon-192.png', png192);
fs.writeFileSync('public/icon-192-maskable.png', png192);
fs.writeFileSync('public/apple-touch-icon.png', png192);

// Also write inside public/assets/icons/ if needed
if (fs.existsSync('public/assets/icons')) {
  fs.writeFileSync('public/assets/icons/icon-512.png', png512);
  fs.writeFileSync('public/assets/icons/icon-192.png', png192);
  fs.writeFileSync('public/assets/icons/apple-touch-icon.png', png192);
}
if (fs.existsSync('public/assets/brand')) {
  fs.writeFileSync('public/assets/brand/gothwad-logo.png', png512);
  fs.writeFileSync('public/assets/brand/logo.png', png512);
}

console.log('Successfully generated all PNG icon files!');
