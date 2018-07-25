import {Carousel} from 'antd';
import './CaseCarousel.css';

function CaseCarousel (){
    function onChange(){

    }
    return(
        <Carousel afterChange={onChange}>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
        </Carousel>
    )
}
export default CaseCarousel;