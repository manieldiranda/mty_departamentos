import React, {Component} from 'react';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Map from './Components/Map'
import PrimeReact from 'primereact/utils';
import ListingContainer from './Components/ListingContainer';
import LogInModal from './Components/LogInModal';
import ListingDetail from './Components/ListingDetail';


class App extends Component {
    constructor(props) {
        super(props);
        PrimeReact.ripple = true;
        this.state = {
            isLogInModalActive: false,
            isDetailModalActive: false
        }
    }

    logInButtonClick = () => {
        this.setState({
            isLogInModalActive: true
        })
    }

    closeLogInModal = () => {
        this.setState({
            isLogInModalActive: false
        })
    }

     listingDetailCardClick = () => {
        console.log("Yes")
           this.setState({
            isDetailModalActive: true
        })
    }

    closeDetailModal = () => {
           this.setState({
            isDetailModalActive: false
        })
    }


    render() {
        return (
            <div className="App">

                <NavigationBar logInButtonClick={this.logInButtonClick}/>

                <div className="p-grid pageContentsContainer">
                    <div className=" p-xl-7 p-lg-8 p-md-0 mapComponentContainer">
                        <Map/>
                    </div>
                    <div className=" p-xl-5 p-lg-4 p-md-12 listingContainerCard">
                        <ListingContainer listingDetailCardClick={this.listingDetailCardClick} logInButtonClick={this.logInButtonClick}/>
                    </div>
                </div>
                <LogInModal isLogInModalActive={this.state.isLogInModalActive} closeLogInModal={this.closeLogInModal}/>
                <ListingDetail isDetailModalActive={this.state.isDetailModalActive} closeDetailModal={this.closeDetailModal}/>
            </div>
        );
    }
}

App.propTypes = {};

export default App;

