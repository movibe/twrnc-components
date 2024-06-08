import { Platform } from 'react-native'

type ItestID = {
  accessibilityLabel?: string
  accessible?: boolean
  testID: string
}
const testID = (testID: string, accessibilityLabel?: string): ItestID =>
  Platform.OS === 'android'
    ? {
        accessibilityLabel,
        testID,
      }
    : {
        accessible: false,
        testID,
      }

type componentType =
  | 'ActivityIndicator'
  | 'View'
  | 'Lottie'
  | 'ScrollView'
  | 'Modal'
  | 'TextInput'
  | 'Image'
  | 'Text'
  | 'ImageBackground'
  | 'TouchableOpacity'
  | 'Radio'
  | 'Switch'
  | 'Checkbox'
  | 'SafeAreaView'
  | 'Skeleton'
  | 'Pressable'
  | 'Button'
  | 'Slider'
  | 'List'
  | 'Input'
  | 'Select'

export const assignTestId = (componentType: componentType, componentId: string, label?: string): ItestID => {
  const id = `${componentType}_${componentId}`
  return testID(id, label)
}
export const mockTestID = (componentType: componentType, componentId: string): string =>
  assignTestId(componentType, componentId).testID
