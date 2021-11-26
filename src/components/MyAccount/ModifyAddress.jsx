import React, { useEffect, useState } from 'react'
import PageBanner from './../../components/commonComponent/PageBanner/PageBanner';
import { useHistory } from "react-router";

//material ui data table
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

function ModifyAddress() {
    const history = useHistory();
    const classes = useStyles();

    const [AddressArr, setAddressArr] = useState([
        { address: "abcd" },
        { address: "fdgdfgd" }
    ])

    // for pagination hadler 
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);

    const handleChangePage = (event, newPage) => {
        window.scrollTo(0, 0);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>

            <PageBanner title="modify address" menu={true} />

            <div className="container">
                <div className="row mb-4 p-2">
                    <div className="mb-3 contact_us_heading ">Modify Your Address</div>
                    <div className="table_foramtitng">
                        <TableContainer component={Paper}>
                            <Table
                                className={classes.table}
                                aria-label="customized table"
                                id="table_outside_border"
                            >
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell
                                            align="left"
                                            className="table_header"
                                        >
                                            Address
                                        </StyledTableCell>


                                        <StyledTableCell
                                            align="left"
                                            className="table_header"
                                        >
                                            Action
                                        </StyledTableCell>


                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(rowsPerPage > 0
                                        ? AddressArr.slice(
                                            page * rowsPerPage,
                                            page * rowsPerPage +
                                            rowsPerPage
                                        )
                                        : AddressArr
                                    ).map((row) => (
                                        <StyledTableRow>
                                            <StyledTableCell
                                                align="left"
                                            >
                                                {row.address}
                                            </StyledTableCell>
                                            <StyledTableCell
                                                align="left"
                                            >
                                                <div className="d-flex">
                                                    <span><i className="fa fa-edit" /></span>
                                                    <span className="ml-5"><i className="fa fa-trash" /></span>
                                                </div>
                                            </StyledTableCell>

                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <TablePagination
                                true
                                rowsPerPageOptions={false}
                                component="div"
                                count={AddressArr.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={
                                    handleChangeRowsPerPage
                                }
                            />
                        </TableContainer>
                    </div>

                    <div className=" mt-3 mb-3">
                        <span>
                            <button
                                className="contact_btn"
                                onClick={() => history.goBack()}
                            >
                                <i className="fa fa-arrow-left" /> Back
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default ModifyAddress
