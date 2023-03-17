import {StyleSheet} from 'react-native';
import {BOX_SHADOW, BOX_SHADOW_LOW, typography} from '../../theme/default';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  container_header: {
    flexGrow: 2,
  },
  container_body: {
    flexGrow: 2,
  },
  container_footer: {
    flexGrow: 1,
  },
  container_welcome_title: {
    fontWeight: typography.fontWeights.extrabold,
    fontSize: typography.fontSizes.lg,
    lineHeight: 27,
  },
  container_welcome_subtitle: {
    fontWeight: typography.fontWeights.normal,
    fontSize: typography.fontSizes.sm,
    lineHeight: 21,
  },
  container_pointsCard: {
    marginTop: 20,
  },
  container_pointsCard_title: {
    fontWeight: typography.fontWeights.extrabold,
    fontSize: typography.fontSizes.xs,
    lineHeight: 19,
    textTransform: 'uppercase',
    color: '#9B9898',
  },
  container_pointsCard_contain: {
    ...BOX_SHADOW,
    backgroundColor: '#334FFA',
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 30,
    marginTop: 20,
    padding: 20,
    paddingBottom: 50,
  },
  container_pointsCard_contain_moth: {
    color: '#FFFFFF',
    fontWeight: typography.fontWeights.extrabold,
    fontSize: typography.fontSizes.md,
    lineHeight: 22,
  },
  container_pointsCard_contain_value: {
    color: '#FFFFFF',
    fontWeight: typography.fontWeights.extrabold,
    fontSize: typography.fontSizes['3xl'],
    lineHeight: 43,
    textAlign: 'center',
    marginTop: 7,
  },
  container_pointsCard_title_movement: {
    fontWeight: typography.fontWeights.extrabold,
    fontSize: typography.fontSizes.xs,
    lineHeight: 19,
    textTransform: 'uppercase',
    color: '#9B9898',
    marginVertical: 20,
  },
  container_footer_btns: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container_footer_btn: {
    width: '48%',
  },
});
