import './App.scss'
import LivePreview from "./pages/LivePreview.tsx";
import CardDataTable from "./pages/CardDataTable.tsx";
import {useState} from "react";


function App() {

    const [page, setPage] = useState<'data' | 'livepreview'>('livepreview');

    const handlePageChange = (page) => () => {
        setPage(page)
    };
    return <div>
        <div className="navbar">
            <a href="#" onClick={handlePageChange('data')}>Data</a>
            &nbsp;|&nbsp;
            <a href="#" onClick={handlePageChange('livepreview')}>Live Preview</a>
        </div>
        {
            page === "data" && <CardDataTable />
        }
        {
            page === "livepreview" && <LivePreview/>
        }
    </div>
}

export default App;
