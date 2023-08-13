import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import './Slider.css'; 
import Select from 'react-select'


export class Slider extends Component {  
    constructor(props){
        super(props);
        this.imgs = ['img1', 'img2', 'img3', 'img4']
        this.myRef = React.createRef();
        // this.myRef.current = []
        this.cities = [ { value: 'Marrakesh', label: 'Marrakesh' }, { value: 'Tangier', label: 'Tangier'},{ value: 'Ifrane', label: 'Ifrane' }]
        this.options = []
          {[...Array(6)].forEach((_, index) => (
          this.options.push({ value: index < 9? `0${index+1}` : index+1, label: index < 9?`0${index+1}` : index+1 })
        ))}
        this.customStyles = {
            option: (defaultStyles, state) => ({
            ...defaultStyles,
            color: state.isSelected ? "#fff" : "#000",
            backgroundColor: state.isSelected ? "#1cc3b2" : "#fff",
            "&:hover": {
                backgroundColor: state.isSelected === false && "#ececec"
              },
              display: 'flex',
              alignItems: 'center',

              ':before': {
                content: state.isSelected? 'url("assets/img/icons8-géorepérage-24-w.png")' : 'url("assets/img/icons8-géorepérage-24.png")',
                display: 'block',
                marginRight: '15px',
                width: '24px',
                height: '24px',
              },  
            }),
            control: (defaultStyles, state) => ({
            ...defaultStyles,
            width: '100%',
            height: '50px',
            padding: "0",
            border: "1ps solid #1cc3b2",
            borderColor: state.isFocused ? '#1cc3b2' : '#ccc',
            "&:hover": {
                borderColor: "#1cc3b2"
              },
            boxShadow: "none",
            ':before': {
              content: 'url("assets/img/icons8-lit-simple-24.png")',
              display: 'block',
              marginLeft: '8px',
              width: '24px',
              height: '24px',
            },  
            }),
            singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#000", }),
            indicatorSeparator : (defaultStyles) => ({ ...defaultStyles, display : 'none', }),
            container : (defaultStyles) => ({ ...defaultStyles, border : 'none', }),
            dropdownIndicator : (defaultStyles) => ({ ...defaultStyles, display : 'none'  , }),
        }
        this.customStyles2 = {
          ...this.customStyles,
          option: (defaultStyles, state) => ({
            ...defaultStyles,
            color: state.isSelected ? "#fff" : "#000",
            backgroundColor: state.isSelected ? "#1cc3b2" : "#fff",
            "&:hover": {
                backgroundColor: state.isSelected === false && "#ececec"
              },
            }),
            control: (defaultStyles, state) => ({
              ...defaultStyles,
              backgroundColor: "#fff",
              width: '100%',
              height: '50px',
              padding: "0",
              border: "1ps solid #1cc3b2",
              borderColor: state.isFocused ? '#1cc3b2' : '#ccc',
              "&:hover": {
                  borderColor: "#1cc3b2"
                },
              boxShadow: "none",
              }),
          dropdownIndicator : (base, state) => {
            let changes = {
              color: state.isFocused ? '#1cc3b2' : '#999',
                padding : '0 5px 0 0',
                width : '20px',        
              "&:hover": {
                color : '#1cc3b2'
              }
            };
            return Object.assign(base, changes);
          },
        }
    }
    componentDidMount(){
       Array.from(this.myRef.current.children[0].children[0].children[0].children).forEach(el => {
          el.children[0].children[0].children[0].classList.add('content')
        })
    }
  
    render()  
    {  
      return (  
        
    <div>  
        <div class='first-slider' ref={this.myRef}>            
            <OwlCarousel items={1} dots={false} autoplay ={false}  smartSpeed={1000} className="owl-theme custom1"  loop nav  >  
            {this.imgs.map((el,i) => {
                return <div key={i} className='slider' style={{backgroundImage : `url(assets/img/img${i+1}.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            <div className='Mask d-flex flex-column align-items-center justify-content-center text-white'>
                                <div className='cont m-5 d-flex flex-column justify-content-center align-items-center text-center'>
                                    <p className='par mt-5 '>HOTEL & RESORT</p>
                                    <h1 className='welcome fw-bold '>Welcome To Travel</h1>
                                    <button className='btn1 '>Discover Now</button>
                                </div>
                            </div>
                    </div>  
                })}
            </OwlCarousel>
                <div className='hotel-searchbar'>
                    <form action='#' method='POST'>
                        <div class="flex-cont"> 
                               <div className="dest"> 
                                    <label for="destination">Destination</label> 
                                    <Select options={this.cities} isClearable={true} isSearchable={true} menuPlacement={'auto'} autoSize placeholder={'Where are you going?'} name="destination" id="destination"  styles={this.customStyles}  /> 
                                </div> 
                                <div className="checkIn"> 
                                    <label for="checkIn">Check In</label> 
                                    <input type="date" class="form-control" id="checkIn" name="checkin-date" /> 
                                </div> 
                                <div className="checkOut"> 
                                    <label for="checkOut">Check Out</label> 
                                    <input type="date" class="form-control" id="checkOut" name="checkout-date" /> 
                                </div> 
                                <div className="room"> 
                                    <label for="room" className=''>Room</label> 
                                    <Select options={this.options} isSearchable={false} menuPlacement={'auto'} autoSize defaultValue={this.options[0]} name="room" id="room"  styles={this.customStyles2}  /> 
                                </div> 
                            <div className="adults">
                                <label for="adults" className=''>Adult</label> 

                                <Select  options={this.options} isSearchable={false} menuPlacement={'auto'} autoSize defaultValue={this.options[0]} name="room" id="room"  styles={this.customStyles2}  /> 

                            </div> 
                            <div className="children"> 
                                <label for="children" className=''>Children</label> 
                                <Select  options={this.options} isSearchable={false} menuPlacement={'auto'} autoSize defaultValue={this.options[0]} name="room" id="room"  styles={this.customStyles2}  /> 
                            </div> 
                            <div className="check"> 
                                <button type="submit" class="form-control btn btn2 w-100">Check Availability</button> 
                            </div> 
                        </div> 
                    </form>
                </div>
        </div>  

    </div>  
      )  
    }  
  }  
    

export default Slider  