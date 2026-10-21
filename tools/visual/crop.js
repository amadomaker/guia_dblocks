const fs=require('fs');const {PNG}=require('pngjs');
const [, , src, out, x, y, w, h] = process.argv; const A=PNG.sync.read(fs.readFileSync(src));
const o=new PNG({width:+w,height:+h}); PNG.bitblt(A,o,+x,+y,+w,+h,0,0); fs.writeFileSync(out,PNG.sync.write(o));
