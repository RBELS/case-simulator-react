import { FormControl, FormGroup, InputLabel, makeStyles, MenuItem, Select, Checkbox, FormControlLabel } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileActions, resetDropItemsTC } from '../../../store/reducers/profileReducer/profileActions';
import { profileSelectors } from '../../../store/reducers/profileReducer/profileSelectors';

const useStyles = makeStyles({
    formContainer: {
        margin: '5px 0px'
    },
    qualitySelect: {
        width: '200px'
    },
    caseSelect: {
        width: '200px'
    },
    selectContainer: {
        margin: '0px 20px'
    },
    checkboxContainer: {
        margin: '10px 20px'
    }
});

export interface SortItemsFormFiltersI {
    rarity: number
    caseId: number
    notSold: boolean
}

const SortItemsForm: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const profileUsername = useSelector(profileSelectors.username);
    const filters = useSelector(profileSelectors.filters);



    const onSelectChange = (event: React.ChangeEvent<{ name?: string; value: unknown}>) => {
        const key = event.target.name;
        const newFilters: SortItemsFormFiltersI = {
            ...filters,
            [key!]: event.target.value
        };
        dispatch(profileActions.setFiltersAC(newFilters));
        dispatch(resetDropItemsTC(profileUsername, newFilters));
    }

    const onNotSoldCheckboxChange: React.FormEventHandler = (event) => {
        const newFilters: SortItemsFormFiltersI = {
            ...filters,
            notSold: !filters.notSold
        };
        dispatch(profileActions.setFiltersAC(newFilters));
        dispatch(resetDropItemsTC(profileUsername, newFilters));
    }

    useEffect(() => {
        dispatch(profileActions.setNoMoreDropsAC(false));
        console.log('filters changed')
    }, [filters])

    useEffect(() => {
        dispatch(profileActions.resetFiltersAC());
    }, [])



    return <FormGroup row className={classes.formContainer} >
        <FormControl className={classes.selectContainer}>
            <InputLabel id='sort-items-form-rarity-select'>Rarity</InputLabel>
            <Select
                labelId='sort-items-form-rarity-select'
                className={classes.qualitySelect}
                value={filters.rarity}
                onChange={onSelectChange}
                name='rarity'
            >
                <MenuItem value={-1}>All</MenuItem>
                <MenuItem value={0}>Consumer grade</MenuItem>
                <MenuItem value={1}>Industrial grade</MenuItem>
                <MenuItem value={2}>Mil-spec</MenuItem>
                <MenuItem value={3}>Restricted</MenuItem>
                <MenuItem value={4}>Classified</MenuItem>
                <MenuItem value={5}>Covert</MenuItem>
            </Select>
        </FormControl>

        <FormControl className={classes.selectContainer}>
            <InputLabel id='sort-items-form-case-select'>Case</InputLabel>
            <Select
                labelId='sort-items-form-case-select'
                className={classes.caseSelect}
                value={filters.caseId}
                onChange={onSelectChange}
                name='caseId'
            >
                <MenuItem value={-1}>All</MenuItem>
                <MenuItem value={0}>Cobblestone</MenuItem>
                <MenuItem value={1}>Asiimov</MenuItem>
                <MenuItem value={2}>HyperBeast</MenuItem>
                <MenuItem value={3}>Gay</MenuItem>
            </Select>
        </FormControl>

        <FormControl className={classes.checkboxContainer} onChange={onNotSoldCheckboxChange}>
            <FormControlLabel control={
                <Checkbox 
                    color='primary'
                    name='notSold'
                    checked={filters.notSold}
                />
            }
                label='Not Sold'
            />
        </FormControl>
    </FormGroup>
}

export default SortItemsForm;