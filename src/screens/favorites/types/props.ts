import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Favorites: undefined;
  Catalog: undefined;
};

export type PropsType = NativeStackScreenProps<RootStackParamList, 'Catalog'>;
