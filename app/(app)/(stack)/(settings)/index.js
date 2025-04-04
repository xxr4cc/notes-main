import { Linking, View } from 'react-native'
import { router } from 'expo-router'
import { useTheme } from 'react-native-paper'
import { useTranslation } from 'react-i18next'
import { AppVersionCard, Section, Option, Separator } from '@/components'
import { ArrowForward, OpenInNew } from '@/icons'
import { Languages } from '@/screens'
import { useBottomSheet } from '@/hooks'
import { ROUTES } from '@/constants'

export default function Settings() {
    const { t } = useTranslation()
    const { colors } = useTheme()
    const { ref, onOpen, onClose } = useBottomSheet()

    const iconColor = colors.onBackground

    return (
        <View style={{ flex: 1, gap: 24 }}>
            <Section>
                <Option
                    title={t('settings.language')}
                    description={t('language')}
                    rightContent={<ArrowForward color={iconColor} />}
                    onPress={onOpen}
                />
                <Option
                    title={t('settings.theme')}
                    rightContent={<ArrowForward color={iconColor} />}
                    onPress={() => router.push(ROUTES.THEME)}
                />
            </Section>

            <Separator style={{ marginHorizontal: 24 }} />

            <Languages
                ref={ref}
                onClose={onClose}
            />
        </View>
    )
}
