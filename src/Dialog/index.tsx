import {
  Modal,
  TouchableWithoutFeedback,
  Text,
  View,
} from 'react-native'
import React, { useContext } from 'react'
import getStyles from './styles'
import { CurrentConfirm } from '../types'
import { ConfirmContext } from '../context'
import { noopFn } from '../helpers'

interface Props {
  children: JSX.Element | JSX.Element[];
  dismiss: VoidFunction;
}

const Index = ({
  children,
  dismiss,
}: Props): JSX.Element => {
  const {
    theme, open, title, subtitle, body, titleStyle, subtitleStyle, bodyStyle, dismissOnOutsideClick, modalStyle
  } = useContext<CurrentConfirm>(ConfirmContext)
  const styles = getStyles(theme)

  return (
    <Modal
      visible={ open }
      animationType='fade'
      transparent
      presentationStyle='overFullScreen'
    >
      <TouchableWithoutFeedback onPress={ dismissOnOutsideClick ? dismiss : noopFn }>
        <View style={ styles.centeredView }>
          <TouchableWithoutFeedback>
            <View style={ [styles.modalView, ...modalStyle] }>
              <Text style={ [styles.title, titleStyle] }>
                {title}
              </Text>
              {subtitle && <Text style={ [styles.subtitle, subtitleStyle] }>{subtitle}</Text>}
              {body && <Text style={ [styles.body, bodyStyle] }>{body}</Text>}
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default Index
