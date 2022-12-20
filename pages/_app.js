import { Provider } from 'react-redux';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { I18nextProvider, useTranslation } from 'react-i18next';
import { store, wrapper } from "../redux/index";
import i18n from "../services/language";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'

function App({ Component, pageProps }) {
  const router = useRouter();
 const {t} = useTranslation()

  const links = [{
    label: 'home',
    url: '/',
  },
  {
    label:'login',
    url: '/login',
  },
  {
    label: 'payment',
    url: '/payment',
  }
  ]

  const languages = [{
    value: 'uz',
    label: 'Ozbekcha'
  },
  {
    value: 'eng',
    label: 'English'
  }
  ]

  const changeLanguage = (e) => {
    i18n.changeLanguage(e?.target?.value);
  }

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <div className="container mt-5 ">
          <select className='m-2' onChange={changeLanguage}>
            {
              languages.map((item, index) => (
                <option value={item.value} key={index}>
                  {item.label}
                </option>
              ))
            }
          </select>
          {
            links.map((item, index) => (
              <>
                <Link className={`menu_link ${router.pathname == item?.url ? "active" : ""}`} key={index} href={item?.url}>
                  {t(item?.label)}
                </Link>
              </>
            ))
          }
          <Component {...pageProps} />
        </div>
      </I18nextProvider>
    </Provider>
  )
}

export default wrapper.withRedux(App);
