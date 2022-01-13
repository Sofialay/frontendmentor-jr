import nft from '../images/image-equilibrium.jpg'
import clock from '../images/icon-clock.svg'
import eth from '../images/icon-ethereum.svg'
import avatar from '../images/image-avatar.png'

export const Card = () :JSX.Element => {
  return (
    <div className='ch__cardWr'>
      <div className='ch__card'>
          <img src={nft} alt='equilibrium NFT'/>
          <article>
            <h1>Equilibrium #3429</h1>
            <p>Our Equilibrium collection promotes balance and calm.</p>
            <section className='info'>
              <div>
                <img src={eth} alt='Ethereum' className='img-info'/>
                <p className='price'>0.041ETH</p>
              </div>
              <div>
                <img src={clock} alt='Clock' className='img-info'/>
                <p>3 days left</p>
              </div>
            </section>
            <section className='author'>
              <img src={avatar} alt='Creator profile pic'/>
              <p>Creation of <b>Jules Wybern</b></p>
            </section>
          </article>
      </div>
    </div>
  )
}