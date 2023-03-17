import {StyleSheet} from 'react-native';
import {BOX_SHADOW, typography} from '../../theme/default';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  container_header: {
    flexDirection: 'column',
    width: '100%',
    height: '40%',
  },
  container_body: {
    height: 310,
  },
  container_footer: {
    flex: 0.1,
    marginTop: 20,
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
    paddingBottom: 30,
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
  container_body_scroll: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexGrow: 2,
  },
  container_footer_btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container_footer_btn: {
    width: '48%',
  },
});
