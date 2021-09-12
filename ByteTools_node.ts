/**
 * Copyright (c) PROPHESSOR 2021
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import fs from 'fs';

function demoUsage() { // This function just for demonstration. You can remove it.
    const file = new ByteTools(fs.readFileSync("filename.ext"));

    console.log(file.readUInt8());
    console.log(file.readUInt8());
    console.log(file.readInt16LE());
    console.log(file.tell());
    console.log(file.seekInt8());
    console.log(file.seek(32, "CUR"));
    console.log(file.tell());
}

type TSeekMode = 'START' | 'CUR';

export default class ByteTools {
    buffer: Buffer;
    offset: number;

    constructor(buffer = Buffer.from([]), offset = 0) {
        this.buffer = buffer;
        this.offset = offset;
    }

    // basics
    tell() {
        return this.offset;
    }

    seek(offset: number, mode: TSeekMode = "START") {
        switch (mode) {
            case "CUR":
                return this.offset += offset;
            case "START":
            default:
                return this.offset = offset;
        }
    }

    // read

    // int8

    readInt8() {
        const tmp = this.buffer.readInt8(this.offset);

        this.offset += 1;

        return tmp;
    }

    readUInt8() {
        const tmp = this.buffer.readUInt8(this.offset);

        this.offset += 1;

        return tmp;
    }


    // int16

    readInt16LE() {
        const tmp = this.buffer.readInt16LE(this.offset);

        this.offset += 2;

        return tmp;
    }

    readUInt16LE() {
        const tmp = this.buffer.readUInt16LE(this.offset);

        this.offset += 2;

        return tmp;
    }

    readInt16BE() {
        const tmp = this.buffer.readInt16BE(this.offset);

        this.offset += 2;

        return tmp;
    }

    readUInt16BE() {
        const tmp = this.buffer.readUInt16BE(this.offset);

        this.offset += 2;

        return tmp;
    }

    // int32

    readInt32LE() {
        const tmp = this.buffer.readInt32LE(this.offset);

        this.offset += 4;

        return tmp;
    }

    readUInt32LE() {
        const tmp = this.buffer.readUInt32LE(this.offset);

        this.offset += 4;

        return tmp;
    }

    readInt32BE() {
        const tmp = this.buffer.readInt32BE(this.offset);

        this.offset += 4;

        return tmp;
    }

    readUInt32BE() {
        const tmp = this.buffer.readUInt32BE(this.offset);

        this.offset += 4;

        return tmp;
    }
    
    
    // custom size

    readIntLE(size) {
        const tmp = this.buffer.readIntLE(this.offset, size);

        this.offset += size;

        return tmp;
    }

    readUIntLE(size) {
        const tmp = this.buffer.readUIntLE(this.offset, size);

        this.offset += size;

        return tmp;
    }

    readIntBE(size) {
        const tmp = this.buffer.readIntBE(this.offset, size);

        this.offset += size;

        return tmp;
    }

    readUIntBE(size) {
        const tmp = this.buffer.readUIntBE(this.offset, size);

        this.offset += size;

        return tmp;
    }

    readFloatLE() {
        const tmp = this.buffer.readFloatLE(this.offset);

        this.offset += 4;

        return tmp;
    }

    readFloatBE() {
        const tmp = this.buffer.readFloatBE(this.offset);

        this.offset += 4;

        return tmp;
    }

    readCharString(length = -1, trimZeros=false) {
        let string = '';

        if (length < 0) {
            while (true) {
                const code = this.readUInt8();

                if (code === 0) break;

                string += String.fromCharCode(code);
            }
        } else {
            for (let i = 0; i < length; i++) {
                const code = this.readUInt8();

                if (trimZeros && code === 0) continue;

                string += String.fromCharCode(code);
            }
        }

        return string;
    }

    // seek

    // int8

    seekInt8() {
        return this.buffer.readInt8(this.offset);
    }

    seekUInt8() {
        return this.buffer.readUInt8(this.offset);
    }


    // int16

    seekInt16LE() {
        return this.buffer.readInt16LE(this.offset);
    }

    seekUInt16LE() {
        return this.buffer.readUInt16LE(this.offset);
    }

    seekInt16BE() {
        return this.buffer.readInt16BE(this.offset);
    }

    seekUInt16BE() {
        return this.buffer.readUInt16BE(this.offset);
    }

    // int32

    seekInt32LE() {
        return this.buffer.readInt32LE(this.offset);
    }

    seekUInt32LE() {
        return this.buffer.readUInt32LE(this.offset);
    }

    seekInt32BE() {
        return this.buffer.readInt32BE(this.offset);
    }

    seekUInt32BE() {
        return this.buffer.readUInt32BE(this.offset);
    }

    // skip

    // int8

    skipInt8() {
        return this.offset += 1;
    }

    skipUInt8() {
        return this.offset += 1;
    }


    // int16

    skipInt16LE() {
        return this.offset += 2;
    }

    skipUInt16LE() {
        return this.offset += 2;
    }

    skipInt16BE() {
        return this.offset += 2;
    }

    skipUInt16BE() {
        return this.offset += 2;
    }

    // int32

    skipInt32LE() {
        return this.offset += 4;
    }

    skipUInt32LE() {
        return this.offset += 4;
    }

    skipInt32BE() {
        return this.offset += 4;
    }

    skipUInt32BE() {
        return this.offset += 4;
    }
};
