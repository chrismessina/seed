import React from 'react'
import { PageCont, Content } from './styled'

export const Usage = () => {
  return (
    <PageCont>
      <Content>
        <h1>Heading 1</h1>
        <p>
          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh
          onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo
          beet greens corn soko endive gumbo gourd. Parsley shallot courgette
          tatsoi pea sprouts fava bean collard greens dandelion okra wakame
          tomato. Dandelion cucumber earthnut pea peanut soko zucchini. Turnip
          greens yarrow ricebean rutabaga endive cauliflower sea lettuce
          kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
          winter purslane kale. Celery potato scallion desert raisin horseradish
          spinach carrot soko. Lotus root water spinach fennel kombu maize
          bamboo shoot green bean swiss chard seakale pumpkin onion chickpea
          gram corn pea. Brussels sprout coriander water chestnut gourd swiss
          chard wakame kohlrabi beetroot carrot watercress. Corn amaranth
          salsify bunya nuts nori azuki bean chickweed potato bell pepper
          artichoke.
        </p>
        <h2>Heading 2</h2>
        <p>
          Veggies es bonus vobis, <a>this is a link it goes nowheres</a>proinde
          vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi
          tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive
          gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean
          collard greens dandelion okra wakame tomato. Dandelion cucumber
          earthnut pea peanut soko zucchini.{' '}
          <code>Testing testing one two</code>Turnip greens yarrow ricebean
          rutabaga endive cauliflower sea lettuce kohlrabi amaranth water
          spinach avocado daikon napa cabbage asparagus winter purslane kale.
          Celery potato scallion desert raisin horseradish spinach carrot soko.
          Lotus root water spinach fennel kombu maize bamboo shoot green bean
          swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels
          sprout coriander water chestnut gourd swiss chard wakame kohlrabi
          beetroot carrot watercress. Corn amaranth salsify bunya nuts nori
          azuki bean chickweed potato bell pepper artichoke.
        </p>
        <p className='styled-code'>
          <pre><ion-icon ios="heart-outline" md="heart-sharp"></ion-icon></pre>
        </p>
      </Content>
    </PageCont>
  )
}
