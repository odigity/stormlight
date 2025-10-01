import {
    Autocomplete,
    Box,
    Grid,
    Paper,
    TextField,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    OutlinedInput,
    Checkbox,
    ListItemText,
    ToggleButtonGroup,
    ToggleButton
} from "@mui/material";
import _ from "lodash";
import {allCards} from "../carddata";
import {propertyFilters, useFilterDispatch, useFilterState} from "../contexts/filter.context.tsx";

const values = {
    names    : _.sortBy(_.uniq(_.map(allCards, 'name'))),
    statuses : ['TODO', 'PROOF', 'DONE'],
    types    : _.sortBy(_.uniq(_.map(allCards, 'type'))),
};

export default function FilterSelectionBox() {
    const dispatch = useFilterDispatch();
    const filters = useFilterState();

    const handleTypeFilterSelect = (e) => {
        if(e.target.value) {
            dispatch({
                type    : 'setType',
                payload : e.target.value,
            });
        }
    };
    const handleStatusFilterSelect = (e) => {
        if(e.target.value) {
            dispatch({
                type    : 'setStatus',
                payload : e.target.value,
            })
        }
    };

    const handlePropFilterSelect = (e) => {
        const {target: {value}} = e;
        dispatch({
            type    : 'setProperties',
            payload : typeof value === 'string' ? value.split(',') : value
        })
    };

    const handleNameSelect = (e, newVal) => {
        dispatch({
            type    : 'setNameQuery',
            payload : newVal,
        });
    };

    const handleTextChange = (e) => {
        dispatch({
            type    : 'setTextQuery',
            payload : e.target.value,
        });
    };

    const handleArtQuerySelect = (e) => {
        dispatch({
            type    : 'setArtQuery',
            payload : e.target.value,
        })
    }

    const handleActionSelect = (e, newVal) => {
        if (newVal) {
            dispatch({
                type    : 'setActions',
                payload : newVal
            });
        }
    };

    return (
        <Paper
            elevation={4}
            sx={{
                marginTop    : 2,
                marginBottom : 2,
                padding      : 2,
            }}>

            <Typography variant="h4">
                Filters:
            </Typography>
            <Grid container spacing={2}>
                {/*Name search*/}
                <Grid size={12}>
                    <Grid size={6}>
                        <Autocomplete
                            value={filters.nameQuery}
                            onChange={handleNameSelect}
                            options={values.names}
                            renderInput={(params) => <TextField {...params} label={"Card Name:"}/>}
                        />
                    </Grid>
                </Grid>

                {/*Action Filter*/}
                <Grid size={6} >
                    <ToggleButtonGroup
                        exclusive
                        value={filters.actions}
                        onChange={handleActionSelect}
                    >
                        <ToggleButton value="Any">Any</ToggleButton>
                        <ToggleButton value="None">None</ToggleButton>
                        <ToggleButton value="-1"><div className="react"></div></ToggleButton>
                        <ToggleButton value="0"><div className="act0"></div></ToggleButton>
                        <ToggleButton value="1"><div className="act1"></div></ToggleButton>
                        <ToggleButton value="2"><div className="act2"></div></ToggleButton>
                        <ToggleButton value="3"><div className="act3"></div></ToggleButton>
                        <ToggleButton value="*"><div className="star"></div></ToggleButton>
                    </ToggleButtonGroup>
                </Grid>

                {/*Art Filter*/}
                <Grid size={6}>
                    <ToggleButtonGroup
                        exclusive
                        value={filters.artQuery}
                        onChange={handleArtQuerySelect}
                    >
                        <ToggleButton value="Any">Any</ToggleButton>
                        <ToggleButton value="Yes">Has Art</ToggleButton>
                        <ToggleButton value="No">No Art</ToggleButton>

                    </ToggleButtonGroup>
                </Grid>

                {/*Type Filter*/}
                <Grid size={3}>
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel>Type:</InputLabel>
                            <Select
                                label="Type"
                                labelId="type-select-label"
                                id="type-select"
                                multiple
                                input={<OutlinedInput label="Types" />}
                                renderValue={(selected) => selected.join(', ')}
                                value={filters.type}
                                onChange={handleTypeFilterSelect}
                            >
                                {
                                    _.map(values.types, (type) => {
                                        return <MenuItem value={type} key={type}>
                                            <Checkbox checked={filters.type.includes(type)}/>
                                            <ListItemText primary={type}/>
                                        </MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

                {/*Status Filter*/}
                <Grid size={3}>
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel>Status:</InputLabel>
                            <Select
                                label="Status"
                                labelId="status-select-label"
                                id="status-select"
                                multiple
                                input={<OutlinedInput label="Status" />}
                                renderValue={(selected) => selected.join(', ')}
                                value={filters.status}
                                onChange={handleStatusFilterSelect}
                            >
                                {
                                    _.map(values.statuses, (status) => {
                                        // return <MenuItem value={status} key={status}>{status}</MenuItem>
                                        return <MenuItem value={status} key={status}>
                                            <Checkbox checked={filters.status.includes(status)}/>
                                            <ListItemText primary={status}/>
                                        </MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

                {/*Property Filter*/}
                <Grid size={6}>
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel id="prop-filter-checkbox-label">Properties</InputLabel>
                            <Select
                                labelId="prop-filter-label"
                                id="prop-checkboxes"
                                multiple
                                value={filters.properties}
                                onChange={handlePropFilterSelect}
                                input={<OutlinedInput label="Properties"/>}
                                renderValue={(selected) => selected.join(', ')}
                                // MenuProps={MenuProps}
                            >
                                {propertyFilters.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={filters.properties.includes(name)}/>
                                        <ListItemText primary={name}/>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

                {/*Text Search*/}
                <Grid size={12}>
                    <TextField
                        fullWidth
                        id="text-search-input"
                        label="Text search"
                        variant="standard"
                        value={filters.textQuery}
                        onChange={handleTextChange}
                    />
                </Grid>
            </Grid>
        {/*    Add sorting??*/}
        </Paper>
    );
};
