import React, { Component } from 'react';
import Context from './Context';

class Provider extends Component {
    state = {
        cookie: {
            language: undefined
        },
        pricingFormError: false,
        registerPage: 0,
        packageId: "",
        packageUsers: "",
        packageUnitPrice: "",
        packageYearlyPrice: "",
        packageMonthlyPrice: "",
        registrationYearMonth: "",
        countryId: "",
        countryName: "",
        taxNo: "",
        companyName: "",
        phone: "",
        website: "",
        address: "",
        subdomainStatus: false,
        subdomainTemp: "",
        subdomain: "",
        name: "",
        surname: "",
        mobile: "",
        personalEmail: "",
        adminEmail: "",
        senderEmail: "",
        campaignCodeStatusOfInput: false,
        campaignCodeReseller: "",
        campaignCodeImage: "",
        campaignCodeDiscount: 0,
        campaignCode: "",
        campaignCodeTemp: "",
        companyLogo: "",
        companyDoc: "",
        aggrementCheckedStatus: false
    }

    render() {
        return (
            <div>
                <Context.Provider value={{
                    state: this.state,
                    setDefault: () => {
                        this.setState({
                            pricingFormError: false,
                            registerPage: 0,
                            packageId: "",
                            packageUsers: "",
                            packageUnitPrice: "",
                            packageYearlyPrice: "",
                            packageMonthlyPrice: "",
                            registrationYearMonth: "",
                            countryId: "",
                            countryName: "",
                            taxNo: "",
                            companyName: "",
                            phone: "",
                            website: "",
                            address: "",
                            subdomainStatus: false,
                            subdomainTemp: "",
                            subdomain: "",
                            name: "",
                            surname: "",
                            mobile: "",
                            personalEmail: "",
                            adminEmail: "",
                            senderEmail: "",
                            campaignCodeStatusOfInput: false,
                            campaignCodeReseller: "",
                            campaignCodeImage: "",
                            campaignCodeDiscount: 0,
                            campaignCode: "",
                            campaignCodeTemp: "",
                            companyLogo: "",
                            companyDoc: "",
                            aggrementCheckedStatus: false
                        })
                    },
                    setCookie: (_cookie) => {
                        this.setState({
                            cookie: {
                                languageAccept: _cookie.languageAccept,
                                language: _cookie.language
                            }
                        });
                    },
                    setPricingFormError: (_value) => {
                        this.setState({
                            pricingFormError: _value
                        })
                    },
                    setRegisterPage: (_value) => {
                        this.setState({
                            registerPage: this.state.registerPage + 1
                        })
                    },
                    setCampainCode: (_value) => {
                        this.setState({
                            campainCode: _value
                        })
                    },
                    setPackageId: (_value) => {
                        this.setState({
                            packageId: _value
                        })
                    },
                    setPackageUsers: (_value) => {
                        this.setState({
                            packageUsers: _value
                        })
                    },
                    setPackageUnitPrice: (_value) => {
                        this.setState({
                            packageUnitPrice: _value
                        })
                    },
                    setRegistrationYearMonth: (_value) => {
                        this.setState({
                            registrationYearMonth: _value
                        })
                    },
                    setCountryId: (_value) => {
                        this.setState({
                            countryId: _value
                        })
                    },
                    setCountryName: (_value) => {
                        this.setState({
                            countryName: _value
                        })
                    },
                    setTaxNo: (_value) => {
                        this.setState({
                            taxNo: _value
                        })
                    },
                    setCompanyName: (_value) => {
                        this.setState({
                            companyName: _value
                        })
                    },
                    setPhone: (_value) => {
                        this.setState({
                            phone: _value
                        })
                    },
                    setWebSite: (_value) => {
                        this.setState({
                            website: _value
                        })
                    },
                    setAddress: (_value) => {
                        this.setState({
                            address: _value
                        })
                    },
                    setSubdomainStatus: (_value) => {
                        this.setState({
                            subdomainStatus: _value
                        })
                    },
                    setTempSubdomain: (_value) => {
                        this.setState({
                            subdomainTemp: _value
                        })
                    },
                    setSubDomain: (_value) => {
                        this.setState({
                            subdomain: _value
                        })
                    },
                    setName: (_value) => {
                        this.setState({
                            name: _value
                        })
                    },
                    setSurname: (_value) => {
                        this.setState({
                            surname: _value
                        })
                    },
                    setMobile: (_value) => {
                        this.setState({
                            mobile: _value
                        })
                    },
                    setPersonalEmail: (_value) => {
                        this.setState({
                            personalEmail: _value
                        })
                    },
                    setAdminEmail: (_value) => {
                        this.setState({
                            adminEmail: _value
                        })
                    },
                    setSenderEmail: (_value) => {
                        this.setState({
                            senderEmail: _value
                        })
                    },
                    setCompanyLogo: (_value) => {
                        this.setState({
                            companyLogo: _value
                        })
                    },
                    setCompanyDoc: (_value) => {
                        this.setState({
                            companyDoc: _value
                        })
                    },
                    setCampaignCodeStatusOfInput: (_value) => {
                        this.setState({
                            campaignCodeStatusOfInput: _value
                        })
                    },
                    setCampaignReseller: (_value) => {
                        this.setState({
                            campaignCodeReseller: _value
                        })
                    },
                    setCampaignCodeImage: (_value) => {
                        this.setState({
                            campaignCodeImage: _value
                        })
                    },
                    setCampaignCodeDiscount: (_value) => {
                        this.setState({
                            campaignCodeDiscount: _value
                        })
                    },
                    setCampaignCode: (_value) => {
                        this.setState({
                            campaignCode: _value
                        })
                    },
                    setCampaignCodeTemp: (_value) => {
                        this.setState({
                            campaignCodeTemp: _value
                        })
                    },
                    setAggrementCheckedStatus: (_value) => {
                        this.setState({
                            aggrementCheckedStatus: _value
                        })
                    },
                    calculateYearlyPrice: () => {
                        let discont = 10

                        let total = this.state.packageUsers * this.state.packageUnitPrice * 12
                        let discontedPrice = total - ((total * discont) / 100)

                        if (this.state.campaignCodeDiscount > 0) {
                            discontedPrice = discontedPrice - ((discontedPrice * this.state.campaignCodeDiscount) / 100)
                        }

                        this.setState({
                            packageYearlyPrice: Number((discontedPrice).toFixed(2))
                        })
                    },
                    calculateMonthlyPrice: () => {
                        let total = this.state.packageUsers * this.state.packageUnitPrice

                        if (this.state.campaignCodeDiscount > 0) {
                            total = total - ((total * this.state.campaignCodeDiscount) / 100)
                        }

                        this.setState({
                            packageMonthlyPrice: Number((total).toFixed(2))
                        })
                    }
                }}>
                    {this.props.children}
                </Context.Provider>
            </div>
        );
    };
}

export default Provider;