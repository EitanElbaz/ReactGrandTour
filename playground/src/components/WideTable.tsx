import React from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@material-ui/core';

const WideTable = () => (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    {Array(50)
                        .fill(undefined)
                        .map((val, i) => (
                            <TableCell>
                                <Typography noWrap variant="subtitle1">
                                    Header {i + 1}
                                </Typography>
                            </TableCell>
                        ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {Array(5)
                    .fill(undefined)
                    .map((rval, ri) => (
                        <TableRow id={`row-${ri}`}>
                            {Array(50)
                                .fill(undefined)
                                .map((cval, ci) => (
                                    <TableCell id={`row-${ri}-col-${ci}`}>
                                        <Typography noWrap variant="subtitle2">
                                            Row {ri + 1} Col {ci + 1}
                                        </Typography>
                                    </TableCell>
                                ))}
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default WideTable;
