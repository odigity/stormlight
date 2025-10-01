import './App.scss'
import LivePreview from "./pages/LivePreview.tsx";
import CardDataTable from "./pages/CardDataTable.tsx";
import {useState} from "react";
import {AppBar, Box, Button, Container, createTheme, CssBaseline, Stack, ThemeProvider, Toolbar} from "@mui/material";



const theme = createTheme({

})

function App() {

    const [page, setPage] = useState<'data' | 'livepreview'>('livepreview');

    const handlePageChange = (page) => () => {
        setPage(page)
    };
    return <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static">
                    <Toolbar disableGutters>
                        <Stack direction="row" spacing={2} padding={2}>
                            <Button onClick={handlePageChange('data')} color="inherit" variant="outlined">
                                Data
                            </Button>
                            <Button onClick={handlePageChange('livepreview')} color="inherit" variant="outlined">
                                Live Preview
                            </Button>
                        </Stack>
                    </Toolbar>
            </AppBar>
            <Box sx={{
                marginTop: 2,
            }}>
                {
                    page === "data" && <CardDataTable />
                }
                {
                    page === "livepreview" && <LivePreview/>
                }
            </Box>
        </ThemeProvider>
    </>
}

export default App;
