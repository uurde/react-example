import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import Detail from './Detail';

export default class List extends Component {
    state = { data: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ data: response.data }));
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    renderData() {
        return this.state.data.map((responseData, Id) => <Detail key={Id} data={responseData} />
            //yukarıda bir dizinin içinde dönüp başlıkları yazdırdık. fakat uygulama her satır için bir uniquelik istemekte. Bunu yapabilmek için key attribute'una gelen datanın idsini yazabiliriz ya da yukarıdaki gibi uniqueliği sağlayabiliriz.
        );
    }

    render() {
        console.log('render');
        return (
            <View style={{ marginTop: 5 }}>
                {this.renderData()}
            </View>
        );
    };
};

//gelen datayı logladık
//axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => console.log(response));

// const List = () => {
//     const { viewStyle } = styles;
//     return (
//         <View style={viewStyle}>
//             <Text>Örnek proje liste sayfası</Text>
//         </View>
//     );
// };

// const styles = {
//     viewStyle: {
//         marginTop: 5
//     }
// };