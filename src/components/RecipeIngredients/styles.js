import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../colors'

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width * 0.9;
const imageHeight = dimensions.width * 0.7;
const marginLeft = (dimensions.width - (imageWidth)) / 2;

export default StyleSheet.create({
    recipeIngredients: {
        width: imageWidth / 2 + marginLeft,
        marginStart: marginLeft
    },

    ingredientName: {
        fontSize: 18,
        fontWeight: '400',
        color: Colors.darkGray,
        marginStart: 14
    },

    bulletPoint: {
        width: 12,
        height: 12
    },

    ingredient: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginBottom: 6,
    },

})