import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function RoomType({selectedRoomType}) {
    return (
        <div>
            <label className='text-slate-400' style={{ color: 'rgb(127 87 241 / var(--tw-text-opacity))' }}>
                Selecione o tipo de ambiente *
            </label>
            <Select onValueChange={(value) => selectedRoomType(value)}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Tipo de Ambiente" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Sala">Sala</SelectItem>
                    <SelectItem value="Quarto">Quarto</SelectItem>
                    <SelectItem value="Cozinha">Cozinha</SelectItem>
                    <SelectItem value="Escritório">Escritório</SelectItem>
                    <SelectItem value="Banheiro">Banheiro</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default RoomType