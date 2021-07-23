/**
 * ByteTools (C++) v1.1.1
 *
 * Copyright (c) PROPHESSOR 2019
 */

#pragma once

#include <iostream>
#include <cstdio>
#include <stdint.h>

#define SEEK_START SEEK_SET

class ByteTools {
    public:
        FILE    *m_buffer;

        ByteTools() {
            std::cout << "ByteTools (C++) v1.0.0 // Copyright (c) PROPHESSOR 2019" << std::endl;
        }

        ByteTools(const char* filename) {
            ByteTools();
            open(filename);
        }

        void open(const char* filename) {
            m_buffer = fopen(filename, "rb");
        }

        size_t tell(void) {
            return ftell(m_buffer);
        }

        void seek(long int offset, int mode) {
            fseek(m_buffer, offset, mode);
        }

        // read

        // int8

        int8_t readInt8() {
            int8_t tmp;

            fread(&tmp, sizeof(int8_t), 1, m_buffer);

            return tmp;
        }

        uint8_t readUInt8() {
            uint8_t tmp;

            fread(&tmp, sizeof(uint8_t), 1, m_buffer);

            return tmp;
        }

        // int16

        int16_t readInt16() {
            int16_t tmp;

            fread(&tmp, sizeof(int16_t), 1, m_buffer);

            return tmp;
        }

        uint16_t readUInt16() {
            uint16_t tmp;

            fread(&tmp, sizeof(uint16_t), 1, m_buffer);

            return tmp;
        }

        int16_t readInt16LE() {
            return readInt16();
        }

        uint16_t readUInt16LE() {
            return readUInt16();
        }

        // int32

        int32_t readInt32() {
            int32_t tmp;

            fread(&tmp, sizeof(int32_t), 1, m_buffer);

            return tmp;
        }

        uint32_t readUInt32() {
            uint32_t tmp;

            fread(&tmp, sizeof(uint32_t), 1, m_buffer);

            return tmp;
        }

        int32_t readInt32LE() {
            return readInt32();
        }

        uint32_t readUInt32LE() {
            return readUInt32();
        }
        
        // seek

        // int8

        int8_t seekInt8() {
            int8_t tmp;

            fread(&tmp, sizeof(int8_t), 1, m_buffer);
            seek(-sizeof(int8_t), SEEK_CUR);

            return tmp;
        }

        uint8_t seekUInt8() {
            uint8_t tmp;

            fread(&tmp, sizeof(uint8_t), 1, m_buffer);
            seek(-sizeof(uint8_t), SEEK_CUR);

            return tmp;
        }

        // int16

        int16_t seekInt16() {
            int16_t tmp;

            fread(&tmp, sizeof(int16_t), 1, m_buffer);
            seek(-sizeof(int16_t), SEEK_CUR);

            return tmp;
        }

        uint16_t seekUInt16() {
            uint16_t tmp;

            fread(&tmp, sizeof(uint16_t), 1, m_buffer);
            seek(-sizeof(uint16_t), SEEK_CUR);

            return tmp;
        }

        int16_t seekInt16LE() {
            return seekInt16();
        }

        uint16_t seekUInt16LE() {
            return seekUInt16();
        }

        // int32

        int32_t seekInt32() {
            int32_t tmp;

            fread(&tmp, sizeof(int32_t), 1, m_buffer);
            seek(-sizeof(int32_t), SEEK_CUR);

            return tmp;
        }

        uint32_t seekUInt32() {
            uint32_t tmp;

            fread(&tmp, sizeof(uint32_t), 1, m_buffer);
            seek(-sizeof(uint32_t), SEEK_CUR);

            return tmp;
        }

        int32_t seekInt32LE() {
            return seekInt32();
        }

        uint32_t seekUInt32LE() {
            return seekUInt32();
        }
        
        // skip

        // int8

        void skipInt8() {
            seek(sizeof(int8_t), SEEK_CUR);
        }

        void skipUInt8() {
            seek(sizeof(uint8_t), SEEK_CUR);
        }


        // int16

        void skipInt16() {
            seek(sizeof(int16_t), SEEK_CUR);
        }

        void skipUInt16() {
            seek(sizeof(uint16_t), SEEK_CUR);
        }

        void skipInt16LE() {
            seek(sizeof(int16_t), SEEK_CUR);
        }

        void skipUInt16LE() {
            seek(sizeof(uint16_t), SEEK_CUR);
        }

        // int32

        void skipInt32() {
            seek(sizeof(int32_t), SEEK_CUR);
        }

        void skipUInt32() {
            seek(sizeof(uint32_t), SEEK_CUR);
        }

        void skipInt32LE() {
            seek(sizeof(int32_t), SEEK_CUR);
        }

        void skipUInt32LE() {
            seek(sizeof(uint32_t), SEEK_CUR);
        }
};
