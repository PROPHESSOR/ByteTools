# Copyright (c) PROPHESSOR 2019-2020

import struct
from typing import BinaryIO

class ByteTools():
    def __init__(self, stream: BinaryIO):
        self.stream = stream
        self.order = 'little'

    def byteorder(self, order=None):
        if not order:
            return self.order

        self.order = order

    def seek(self, offset: int, mode='START'):
        whence = 0

        if mode == 'CUR': whence = 1

        self.stream.seek(offset, whence)

    def readASCIIString(self, length):
        return self.stream.read(length).decode('ascii')

    def readUnicodeString(self, length):
        return self.stream.read(length).decode('utf-8')

    def readString(self, length): return self.readUnicodeString(length)

    def getBytes(self, x):
        bytes = self.stream.read(x)

        if not bytes: raise IOError("Unexpected end of file")

        return bytes

    def readUInt(self, x):
        return int.from_bytes(self.getBytes(x), byteorder=self.order, signed=False)

    def readUInt8(self):  return self.readUInt(1)
    def readUInt16(self): return self.readUInt(2)
    def readUInt32(self): return self.readUInt(4)

    def readInt(self, x):
        return int.from_bytes(self.getBytes(x), byteorder=self.order, signed=True)

    def readInt8(self):  return self.readInt(1)
    def readInt16(self): return self.readInt(2)
    def readInt32(self): return self.readInt(4)
    def readInt64(self): return self.readInt(8)

    def readFloat(self):
        return struct.unpack('f', self.getBytes(4))
