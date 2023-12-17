import './aboutus.css'
// import { useState } from 'react'

import aboutmainimg from './aboutus-images/main-img.png'
import handcraft1 from './aboutus-images/handcraft-1.png'
import handcraft2 from './aboutus-images/handcraft-2.png'
import handcraft3 from './aboutus-images/handcraft-3.png'
import corevalues from './aboutus-images/Path 4.png'
import line25 from './aboutus-images/Line 25.png'


const Aboutus =(()=>{
   
    return(
        <>
            <div className="Aboutus-section">
                 {/* <h1 className='ABOUT-SGL'>ABOUT SGL </h1> */}
                 <div className='about-main-img'>
                      <img src={aboutmainimg} alt='about-main-img'/>
                 </div>
                 <div className='about-company'>
                    <div className='about-company-contet'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim. Dictum at tempor commodo ullamcorper a lacus. Fringilla urna porttitor rhoncus dolor purus non. Convallis posuere morbi leo urna molestie at elementum. </p>
                      <p>Risus nullam eget felis eget nunc lobortis mattis aliquam. Purus ut faucibus pulvinar elementum. Sed odio morbi quis commodo odio aenean sed adipiscing. Netus et malesuada fames ac turpis egestas integer eget aliquet. Condimentum vitae sapien pellentesque habitant morbi. Integer vitae justo eget magna fermentum iaculis eu non diam. Dolor magna eget est lorem ipsum dolor sit. Aliquam vestibulum morbi blandit cursus risus at ultrices. Integer malesuada nunc vel risus commodo viverra maecenas. Vel orci porta non pulvinar neque laoreet suspendisse. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Habitasse platea dictumst quisque sagittis purus sit amet volutpatconsequat. Vitae suscipit tellus mauris a diam maecenas sed enim ut.Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Id semper risus in hendrerit gravida rutrum quisque.</p>
                    </div>
                    <div className='about-company-images'>
                          <div className='about-company-images-1'>
                               <img className='innerbox-1'/>
                          </div>
                          <div className='about-company-images-2'>
                              <img className='innerbox-2'/>
                          </div>
                    </div>
                     
                 </div>
                 <div className='corevalues-section'> 
                    <div>
                        <img src={corevalues} alt='core-values'/> 
                        <h1>
                            Core <br/>
                            values
                        </h1>
                        <img src={line25} alt='line'/>
                    </div>
                    
                    <div className='core-content'>
                     <p>Pioneering Excellence in Precious Creations, SGL Embodies 
                        Unrivaled Quality and Timeless Elegance in Every Gem and 
                        Jewelry Piece.</p>
                    </div>
                   

                 </div>
                 <h1 className='Cratsmanship'>Craftsmanship</h1>
                 <div className='craftmanship-section'>
                    <div className='Cratsmanship-1'>
                         <p>At SGL, our craftsmanship is an artistry that breathes life into every gem, diamond, bead, and piece of jewelry we offer. Meticulously crafted by skilled artisans with years of expertise, each item is infused with passion and precision. From carefully selected gemstones enhancing their natural brilliance to jewelry pieces designed with a keen eye for detail, we take pride in our commitment to superior quality. Our creations stand as a testament to our dedication to perfection, transforming raw materials into exquisite pieces of art. Choosing SGL means embracing a legacy of craftsmanship, where every piece tells a unique and enchanting story.</p>
                         <div className='Cratsmanship-1-img'>
                            <img src={handcraft1} alt='handcraft1'/>
                            <img src={handcraft2} alt='handcraft2'/>
                         </div>
                    </div>
                    <div className='Cratsmanship-2'>
                            <img src={handcraft3} alt='handcraft3'/>
                    </div>

                 </div>
                 <div className='certified-section'>
                     <div className='years'>
                        <p>1996</p>
                        <p>1998</p>
                        <p>2004</p>
                     </div>
                     <hr/>
                     
                        <div className='certifed-info'>
                            <img/>
                            <div className='certifed-info-content'>
                                <h1>1996</h1>
                                <h2>Certified in Gemology</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim. Dictum at tempor commodo ullamcorper a lacus. Fringilla urna porttitor rhoncus dolor purus non. Convallis posuere morbi leo urna molestie at elementum.</p>
                            </div>
                        </div>
       </div>
            </div>
        </>
    )
})
export default Aboutus