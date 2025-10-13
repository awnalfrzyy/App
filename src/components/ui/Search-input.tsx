/**
 * SearchInput Component
 *
 * Komponen input pencarian (search bar) yang reusable dan elegan.
 * Cocok dipakai di header, halaman list, katalog, dsb.
 *
 *  Fitur:
 * - Icon search di kiri.
 * - Icon clear (❌) otomatis muncul saat ada teks.
 * - Border berubah warna saat fokus (default biru #254EDB).
 * - Mendukung `placeholder`, `value`, dan `onChangeText` untuk kontrol penuh.
 * - Bisa dikustomisasi dengan `className` (Tailwind style).
 *
 * Props:
 * - `placeholder` (string): teks placeholder, default `"Cari sesuatu..."`.
 * - `value` (string): isi input.
 * - `onChangeText` (function): dipanggil tiap kali teks berubah.
 * - `onClear` (function): dipanggil saat tombol ❌ ditekan.
 * - `className` (string): style tambahan Tailwind untuk container utama.
 *
 * Behavior:
 * - Saat input fokus → border & icon berubah jadi biru.
 * - Saat input kosong → icon ❌ disembunyikan.
 * - Menggunakan `lucide-react-native` untuk icon.
 *
 * Contoh Penggunaan:
 * ```tsx
 * import SearchInput from "@/components/SearchInput";
 * import { useState } from "react";
 *
 * export default function SearchScreen() {
 *   const [query, setQuery] = useState("");
 *
 *   return (
 *     <View className="p-4">
 *       <SearchInput
 *         placeholder="Cari dokter, rumah sakit..."
 *         value={query}
 *         onChangeText={setQuery}
 *         onClear={() => setQuery("")}
 *         className="mb-4"
 *       />
 *     </View>
 *   );
 * }
 * ```
 *
 *  Tips:
 * - Kalau mau border-nya jadi rounded full → ganti `rounded-2xl` ke `rounded-full`.
 * - Kalau mau tanpa icon ❌ → hapus bagian `TouchableOpacity`.
 * - Untuk pencarian realtime: panggil API atau filter data di dalam `onChangeText`.
 */


import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Search, X } from 'lucide-react-native';

interface SearchInputProps {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    onClear?: () => void;
    className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
    placeholder = 'Cari sesuatu...',
    value,
    onChangeText,
    onClear,
    className = '',
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View
            className={`flex-row items-center px-3 rounded-2xl border ${isFocused ? 'border-[#254EDB]' : 'border-[#E5E5E5]'} ${className}`}
        >
            <Search size={20} color={isFocused ? '#254EDB' : '#A1A1A1'} />
            <TextInput
                className="flex-1 px-2 py-4 text-base text-[#333]"
                placeholder={placeholder}
                placeholderTextColor="#A1A1A1"
                value={value}
                onChangeText={onChangeText}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {value ? (
                <TouchableOpacity onPress={onClear} className="p-1 rounded-full">
                    <X size={16} color="#666" />
                </TouchableOpacity>
            ) : null}
        </View>
    );
};

export default SearchInput;