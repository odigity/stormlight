import './App.scss'
import LivePreview from "./pages/LivePreview.tsx";
import CardDataTable from "./pages/CardDataTable.tsx";
import {useState} from "react";
import {AppBar, Box, Button, createTheme, CssBaseline, Stack, ThemeProvider, Toolbar} from "@mui/material";
import {FilterProvider} from "./contexts/filter.context.tsx";
import FilterSelectionBox from "./components/FilterSelectionBox.tsx";
import Sheets from "./pages/Sheets.tsx";


const theme = createTheme({});

type PageName = 'data' | 'livepreview' | 'sheets';

function App() {

    const [page, setPage] = useState<PageName>('livepreview');

    const handlePageChange = (page: PageName) => () => {
        setPage(page)
    };
    return <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box className="appbar-wrapper">
                <AppBar position="static">
                        <Toolbar disableGutters>
                            <Stack direction="row" spacing={2} padding={2}>
                                <Button onClick={handlePageChange('data')} color="inherit" variant="outlined">
                                    Data
                                </Button>
                                <Button onClick={handlePageChange('livepreview')} color="inherit" variant="outlined">
                                    Live Preview
                                </Button>
                                <Button onClick={handlePageChange('sheets')} color="inherit" variant="outlined">
                                    Sheets
                                </Button>
                            </Stack>
                        </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{
                marginTop: 2,
            }}>
                <FilterProvider>
                  {
                    (page === 'livepreview' || page === 'data') && (
                      <Box className="filter-wrapper">
                          <FilterSelectionBox />
                      </Box>
                    )
                  }
                    {
                        page === "data" && <CardDataTable />
                    }
                    {
                        page === "livepreview" && <LivePreview/>
                    }
                    {
                        page === "sheets" && <Sheets/>
                    }
                </FilterProvider>
            </Box>
        </ThemeProvider>
    </>
}

export default App;
