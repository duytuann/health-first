import { createIntl, IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { RootState, store } from 'redux/store';
import { Language, LanguageType, setIntlContext } from './redux';
import translate from './translate';

const IntlController: React.FC = ({ children }) => {
  const { lang } = useSelector((state: RootState) => state.language);
  return (
    <IntlProvider messages={translate[lang]} locale={lang || Language[LanguageType.VI]}>
      {children}
    </IntlProvider>
  );
};

const getCurrentLanguage = () => store.getState().language.lang;
const intl = createIntl({
  messages: translate[getCurrentLanguage()],
  locale: getCurrentLanguage() || Language[LanguageType.VI],
});
store.dispatch(setIntlContext(intl));
export default IntlController;
