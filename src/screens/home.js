import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Colors} from 'themes';
import {
  TextInput,
  NavBar,
  CategoryPanel,
  IconModules,
  Button,
  FeaturedItems,
  Space,
  CardItem,
} from 'components';
import {ScrollView, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {alertWithTitle} from 'utils/alert';
import {SliderBox} from 'react-native-image-slider-box';
import Selectors from 'selectors';
import Actions from 'actions';
import {getScreenWidth, normalize} from 'utils/size';
import FastImage from 'react-native-fast-image';
import MasonryList from '@react-native-seoul/masonry-list';

class Home extends Component {
  state = {
    selectedCategory: 0,
    images: [
      'https://source.unsplash.com/1024x768/?abstract',
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?landscape',
      'https://source.unsplash.com/1024x768/?tree',
    ],
    icons: [
      {id: 1, icon: 'local-mall', label: 'Mall', color: Colors.icon1},
      {id: 2, icon: 'trending-down', label: 'Low Price', color: Colors.icon2},
      {
        id: 3,
        icon: 'local-restaurant',
        label: 'Pasar',
        color: Colors.icon3,
      },
      {
        id: 4,
        icon: 'local-attraction',
        label: 'TopUp',
        color: Colors.icon4,
      },
      {
        id: 5,
        icon: 'local-florist',
        label: 'Oversea',
        color: Colors.icon5,
      },
      {
        id: 6,
        icon: 'loyalty',
        label: 'Coins',
        color: Colors.icon6,
      },
      {
        id: 7,
        icon: 'videogame-asset',
        label: 'Game',
        color: Colors.icon7,
      },
      {
        id: 8,
        icon: 'local-see',
        label: 'Beauty',
        color: Colors.icon8,
      },
      {
        id: 9,
        icon: 'flight',
        label: 'Korea',
        color: Colors.icon9,
      },
      {
        id: 10,
        icon: 'local-shipping',
        label: 'Shipping',
        color: Colors.icon10,
      },
      {id: 11, icon: 'cake', label: 'Rewards', color: Colors.icon11},
      {
        id: 12,
        icon: 'local-grocery-store',
        label: 'Grocery',
        color: Colors.icon12,
      },
      {
        id: 13,
        icon: 'local-play',
        label: 'Voucher',
        color: Colors.icon13,
      },
      {
        id: 14,
        icon: 'loyalty',
        label: 'Prestige',
        color: Colors.icon14,
      },
      {
        id: 15,
        icon: 'nightlife',
        label: 'Style',
        color: Colors.icon15,
      },
      {
        id: 16,
        icon: 'home',
        label: 'Home',
        color: Colors.icon16,
      },
      {
        id: 17,
        icon: 'child-friendly',
        label: 'Mum',
        color: Colors.icon17,
      },
      {
        id: 18,
        icon: 'flag',
        label: 'Local',
        color: Colors.icon18,
      },
    ],
    saleItems: [
      {
        id: 1,
        image: 'https://source.unsplash.com/1024x768/?necklace',
        price: 'RM1.00',
        originalPrice: 'RM4.90',
      },
      {
        id: 2,
        image: 'https://source.unsplash.com/1024x768/?pizza',
        price: 'RM20.90',
        originalPrice: 'RM52.90',
      },
      {
        id: 3,
        image: 'https://source.unsplash.com/1024x768/?shoes',
        price: 'RM7.90',
        originalPrice: 'RM39.00',
      },
    ],
    bestSellers: [
      {
        id: 1,
        image: 'https://source.unsplash.com/1024x768/?man',
        rank: 'TOP 7',
        sold: '2.6k Sold',
        category: 'Novelty Gifts',
      },
      {
        id: 2,
        image: 'https://source.unsplash.com/1024x768/?deco',
        rank: 'TOP 2',
        sold: '2.3k Sold',
        category: 'Home Decor',
      },
      {
        id: 3,
        image: 'https://source.unsplash.com/1024x768/?smartphone',
        rank: 'TOP',
        sold: '7.4k Sold',
        category: 'Smartphones',
      },
    ],
    products: [
      {
        id: 1,
        image: 'https://source.unsplash.com/1024x768/?plush',
        title: 'Ready Stock - Large Plushie',
        freeShipping: true,
        price: 'RM121.50',
        discount: '-35%',
        rating: '4.5',
        reviews: 173,
        sold: '299 Sold',
        location: 'China',
      },
      {
        id: 2,
        image: 'https://source.unsplash.com/1024x768/?luggage',
        title: 'New travel luggage',
        freeShipping: true,
        price: 'RM249.90',
        discount: '-15%',
        rating: '4.7',
        reviews: 200,
        sold: '1299 Sold',
        location: 'China',
      },
      {
        id: 3,
        image: 'https://source.unsplash.com/1024x768/?smartwatch',
        title: 'Smart Watch',
        freeShipping: false,
        price: 'RM1200.00',
        discount: '-20%',
        rating: '4.9',
        reviews: 150,
        sold: '50 Sold',
        location: 'China',
      },
      {
        id: 4,
        image: 'https://source.unsplash.com/1024x768/?sofa',
        title: 'Sofa 3 seater modern',
        freeShipping: true,
        price: 'RM1500.00',
        discount: '-15%',
        rating: '4.7',
        reviews: 2713,
        sold: '899 Sold',
        location: 'China',
      },
    ],
    width: getScreenWidth() - normalize(32),
  };

  componentDidMount() {
    this.props.fetchCategories();
  }

  onLayout = e => {
    this.setState({
      width: e.nativeEvent.layout.width,
    });
  };

  render() {
    const {categories} = this.props;
    const {selectedCategory, icons, products} = this.state;
    const dummyText = 'Due to time constraint, this is not implemented';
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <NavBar
          title="Home"
          titleColor="white"
          iconLeft="qr-code-scanner"
          iconColor={Colors.white}
          iconRight="account-balance-wallet"
          onLeftIconPress={() => alertWithTitle('Scan QR', dummyText)}
          onRightIconPress={() => alertWithTitle('Wallet', dummyText)}
        />
        <TextInput
          iconLeft="search"
          iconColor={Colors.gray}
          placeholder="Search for anything"
          itemRight={
            <Button
              onPress={() => alertWithTitle('Search', dummyText)}
              mini
              text="Search"
              color="accent"
            />
          }
        />
        <Space horizontal={normalize(10)} />

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <CategoryPanel
            selected={selectedCategory}
            categories={categories}
            onCategorySelected={selectedCategory =>
              this.setState({selectedCategory})
            }
          />
          <View style={styles.slider} onLayout={this.onLayout}>
            <SliderBox
              images={this.state.images}
              sliderBoxHeight={normalize(160)}
              autoplay
              parentWidth={this.state.width}
              ImageComponent={FastImage}
            />
          </View>
          <IconModules
            icons={icons}
            onIconPress={selected => alertWithTitle(selected, dummyText)}
          />
          <View style={styles.subContent}>
            <FeaturedItems
              title="Flash Sales"
              items={this.state.saleItems}
              type="sales"
            />
            <Space vertical={normalize(20)} />
            <FeaturedItems
              title="Best Sellers"
              items={this.state.bestSellers}
              type="ranking"
            />
            <Space vertical={normalize(20)} />
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
              }}>
              <MasonryList
                data={products}
                keyExtractor={item => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({item, i}) => <CardItem item={item} index={i} />}
                refreshing={false}
                loading={false}
                onRefresh={() => {
                  console.log('onRefresh');
                }}
                onEndReachedThreshold={0.1}
                onEndReached={() => {
                  console.log('load next');
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  slider: {
    marginHorizontal: normalize(16),
    borderRadius: normalize(15),
    overflow: 'hidden',
  },
  subContent: {
    backgroundColor: Colors.nearWhite,
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(15),
  },
});

Home.defaultProps = {};

const mapStateToProps = store => ({
  categories: Selectors.getCategories(store),
});

const mapDispatchToProps = {
  fetchCategories: Actions.fetchCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
