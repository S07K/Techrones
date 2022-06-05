import React from 'react';
import {Link} from 'react-router-dom';

function Why() {
  return (
    <div id='sub-content'>
        <h1>Techrones</h1>
        <h2>Why</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio risus, commodo ac vulputate eget, cursus ac arcu. Etiam in massa ut quam elementum sodales. In placerat nibh in ipsum condimentum, nec ultricies lectus feugiat. Maecenas viverra tincidunt nisl ut maximus. Praesent bibendum nulla sed quam suscipit consequat. Suspendisse potenti. Maecenas sit amet tristique ex. Pellentesque fermentum sit amet lorem ac convallis. Maecenas lorem massa, dictum mattis turpis egestas, sollicitudin maximus velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        <p>Vivamus convallis nibh sit amet lacus pharetra rutrum. Sed feugiat erat id libero vestibulum rutrum. Etiam id posuere dolor. Curabitur eget mauris tristique, faucibus tellus non, accumsan tortor. Etiam nisl ipsum, venenatis vel finibus sit amet, volutpat quis nisl. Proin vitae libero augue. Aliquam nec ligula rhoncus, convallis tortor eget, convallis arcu. Quisque interdum finibus ultrices.</p>
        <p>Maecenas et dolor porta est gravida imperdiet. Pellentesque vehicula ante nec justo dapibus posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque varius lobortis convallis. Nullam posuere dapibus tortor eget gravida. Sed dictum quis eros eu vulputate. Nam eget massa ante.</p>
        <p>Donec sit amet elementum mi. Phasellus nisi orci, posuere et libero vitae, ultrices convallis nulla. Aliquam id tincidunt enim. Phasellus vel efficitur diam. Sed lectus sem, porta at orci elementum, ultrices rhoncus libero. Nullam porta consectetur tortor vitae lacinia. Nunc a ipsum nec nibh tempor aliquet sit amet a elit. Donec nec ante et est sagittis iaculis ut quis est.</p>
        <p>Phasellus vulputate pellentesque fermentum. Ut sed mollis dui. Pellentesque mauris ipsum, tempus at urna quis, porttitor ullamcorper diam. In hac habitasse platea dictumst. Nulla mauris neque, cursus at leo eget, aliquet porta tortor. Duis nec consectetur sem. Nulla tellus ipsum, pellentesque ut facilisis in, consequat vel nisi. Curabitur a arcu pellentesque, volutpat lectus ac, porttitor est. Pellentesque rutrum finibus mauris, non congue sapien consequat tincidunt. Maecenas malesuada ante in nulla accumsan aliquet. In in nibh quis leo iaculis fringilla. Nulla interdum a tortor vel consequat. Duis at aliquet massa, sit amet tempus libero. Phasellus euismod elit at nibh mollis cursus. Quisque ac est a ante molestie venenatis vitae id ante. Morbi sollicitudin, nunc vel egestas sollicitudin, leo enim varius tortor, at fermentum ante arcu a quam.</p>
        <div>
            <span><Link to='/about/when' className='a'>When</Link></span>
            <span><Link to='/about/why' className='a'>Why</Link></span>
            <span><Link to='/about/how' className='a'>How</Link></span>
            <span><Link to='/about/goals' className='a'>Goals</Link></span>
        </div>
    </div>
  )
}

export default Why