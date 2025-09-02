import { COLORS } from '@/constants/theme'
import { styles } from '@/styles/auth.styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { Text, View } from 'react-native'

export default function login() {
  return (
    <View style={styles.container}>
      
        {/* BRAND SECTION */}
        <View style={styles.brandSection}>
            <View style={styles.logoContainer}>
                <Ionicons name="leaf" size={32} color={COLORS.primary} />
            </View>
            <Text style={styles.appName}>Leifvash Cellan</Text>
            <Text style={styles.tagline}>Your gateway to nature&apos;s wonders</Text>
        </View>
        
    </View>
  )
}