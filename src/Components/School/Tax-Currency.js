import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountries, getTaxAndCurrency } from '../../Actions/Index';
import { Table } from 'antd';

class TaxCurrency extends Component{

    constructor(props){
        super(props);
        console.log(this.props);
    }
    
    componentDidMount(){
        this.props.getTaxAndCurrency(this.props.taxData.id);
        this.props.getCountries();
    }

    render(){
        const { countries, countriesLoading, taxLoading, tax} = this.props;
        if(countriesLoading || taxLoading){
            return <div>Loading...</div>
        }
        return(
            <div>
                {console.log(tax)}
                <div>
                <h4>Tax & Currency</h4>
                <p>Country - {tax.country}</p>
                <p>Currency - {tax.currency}</p>
                <p>Tax Name  - {tax.tax}</p>
                <p>Tax Percentage  - {tax.tax_percentage}</p>
                <p>Tax Registration Number  - {tax.tax_registration_num}</p>
                </div>
                <Table />
                {countries.map((data, i)=>{
                    return (
                        <div className="countriesList" key={i}>
                            <div>{data.name.common}</div>  <div> - {data.cca3}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        countries:state.details.countries,
        countriesLoading:state.details.countriesLoading,
        taxLoading:state.details.taxLoading,
        tax:state.details.taxAndCurrency
    }
}

export default connect(mapStateToProps, {getCountries, getTaxAndCurrency})(TaxCurrency);