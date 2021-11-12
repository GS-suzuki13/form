import { Button, Stack, TableCell, TableRow } from "@mui/material";
import React from "react";
import style from './EditableRow.css'

function age(date) {
    var arrayDateHour = date.split(" ");
    var arrayDate = arrayDateHour[0].split("-");
    var thisYear = new Date().getFullYear();
    var years = `${thisYear - arrayDate[0]} anos`
    return (years)
};

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
            <TableRow>
                <TableCell>
                    <input
                        autoComplete='off'
                        type='text'
                        required='required'
                        name='name'
                        placeholder='Insira aqui seu nome'
                        value={editFormData.name}
                        onChange={handleEditFormChange}
                    />
                </TableCell>
                <TableCell>
                    <input
                        autoComplete='off'
                        type='text'
                        required='required'
                        name='lastName'
                        placeholder='Insira aqui seu Sobrenome'
                        value={editFormData.lastName}
                        onChange={handleEditFormChange}
                    />
                </TableCell>
                <TableCell>
                    <input
                        step={0.10}
                        autoComplete='off'
                        type='number'
                        required='required'
                        name='height'
                        placeholder='Insira aqui sua altura'
                        value={editFormData.height}
                        onChange={handleEditFormChange}
                    />
                </TableCell>
                <TableCell>
                    <input
                        autoComplete='off'
                        type='date'
                        required='required'
                        name='birthDate'
                        value={editFormData.birthDate}
                        onChange={handleEditFormChange}
                    />
                </TableCell>
                <TableCell>{age(editFormData.birthDate)}</TableCell>
                <Stack
                    direction='row'
                    spacing={0.5}
                >
                    <Button color='success' variant='contained' type='submit'>SALVAR</Button>
                    <Button color='error' variant='contained' onClick={handleCancelClick}>CANCELAR</Button>
                </Stack>
            </TableRow>
    );
};

export default EditableRow;