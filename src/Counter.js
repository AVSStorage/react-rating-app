import React, { Component as C } from 'react';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';
import Stars from './Stars';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
class Counter extends C 
{
    constructor(props) {
        super(props)
        this.state = {
            starsCount : 1,
            showImage: false
        }

        this.showThankImage = this.showThankImage.bind(this)
    }

    showThankImage() {
    
        setTimeout(() => {
            this.setState({...this.state, showImage: false})
        }, 4000)
    }

    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DatePicker onChange={(n =null, date) => this.setState({...this.state, starsCount: Number(moment(date).format('DD'))})} floatingLabelText="Выберитедату!"/>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="secondary" onClick={ () => { this.setState({...this.state,starsCount: this.state.starsCount + 1 , showImage: !this.showImage}); this.showThankImage()}}>Add +1 rating</Button>
                </Grid>
                <Grid item xs={12}>
                    <Stars starsCount={this.state.starsCount}/>
                </Grid>
                {this.state.showImage && (
                    <Grid item xs={12}>
                        <img src="https://media.giphy.com/media/5ArJanyCfxgiY/giphy.gif" alt="thanks" />
                    </Grid>
                )}
            </Grid>
        );
    }
}


export default Counter;