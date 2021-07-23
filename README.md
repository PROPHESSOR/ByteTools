# PROPHESSOR's ByteTools libraries specification

## Languages

- C++
- Python 3
- JavaScript (Node.js)
- JavaScript (Browser)
- TypeScript (Node.js)


**TODO: Write this**

## Methods

- tell - returns current offset
- seek(offset, mode) - changes the offset {mode 'START' - from start of file, mode 'CUR' - from current offset, mode 'END'? - from end of file}
- read... - returns the value and change the offset
- seek... - returns the value but doesn't change the offset
- skip... - changes the offset and returns it
- readString(length=-1) - reads the string to null byte or to specified length

## Data types

- Int8 - signed byte
- UInt8 - unsigned byte (char)
- Int16LE - signed word in little endian (short)
- UInt16LE - unsigned word in little endian (unsigned short)
- Int16BE - signed word in big endian (short)
- UInt16BE - unsigned word in big endian (unsigned short)
- Int32LE - signed double word in little endian (int)
- UInt32LE - unsigned double word in little endian (unsigned int)
- Int32BE - signed double word in big endian (int)
- UInt32BE - unsigned double word in big endian (unsigned int)
