/**
 * Configuration for this project documentation.
 * We try to separate tools for docs from react-booking in order to make sure
 * we can reuse it for somewhere else.
 */

import { GettingStarted } from './pages/GettingStarted';
import { OnSubmit } from './pages/OnSubmit';
import { PaymentDoc } from './pages/PaymentDoc';
import { CreateAccountDoc } from './pages/CreateAccount';
import { TermsOfServicesDoc } from './pages/TermsOfServices';
import { PrivacyPolicyDoc } from './pages/PrivacyPolicy';
import { EmbedDoc } from './pages/Embed';
import { HowToUse } from './pages/HowToUse';
import { CustomContactInformationExample } from './pages/examples/CustomContactInformationExample';
import { ReactBookingProperties } from './pages/ReactBookingProps';

const location =
  typeof window !== 'undefined' ? window.location : { host: '', hostname: '' };

export const PREFIX =
  location.host === 'pixelplux.github.io' || location.hostname === 'localhost'
    ? ''
    : '/documentation';

export const SidebarItems = [
  {
    label: 'Getting started',
    icon: 'global',
    children: [
      {
        label: 'How to use open-source vs enterprise',
        path: 'how-to-use-booking-and-reservation',
        component: HowToUse
      },
      {
        label: 'Install for ReactJs',
        path: 'getting-started-for-reactjs',
        component: GettingStarted
      },
      {
        label: 'ReactBooking Properties (props)',
        path: 'react-booking-properties',
        component: ReactBookingProperties
      }
    ]
  },
  {
    label: 'Examples',
    icon: 'shield',
    children: [
      {
        label: 'Custom contact information',
        path: 'custom-contact-information',
        component: CustomContactInformationExample
      }
    ]
  },
  {
    label: 'Payment methods',
    path: 'payment-methods',
    icon: 'credit-card'
  },
  {
    label: 'Guides and tutorials',
    icon: 'calendar',
    children: [
      {
        label: 'Create personal booking calendar',
        path: 'create-personal-booking-app',
        component: CreateAccountDoc
      }
    ]
  },
  {
    label: 'Legal and terms',
    icon: 'award',
    children: [
      {
        label: 'Privacy Policy',
        path: 'privacy-policy',
        component: PrivacyPolicyDoc
      },
      {
        label: 'Terms and conditions',
        path: 'terms-and-conditions',
        component: TermsOfServicesDoc
      }
    ]
  },
  {
    label: 'Web Integration',
    icon: 'layers',
    children: [
      {
        label: 'Drop-in booking widget',
        path: 'embed',
        component: EmbedDoc
      }
    ]
  }
];

function extractRoutes(items = []) {
  const routes = items
    .reduce((prev, item) => {
      if (item.children) {
        return [...prev, ...item.children];
      }
      return [...prev, item];
    }, [])
    .filter(item => item.component && item.path);
  return routes;
}

export const StaticRoutes = [
  { path: '/on-submit-props', component: OnSubmit },
  { path: '/payment-methods', component: PaymentDoc },
  { path: '/', component: GettingStarted }
];

export const Routes = [...extractRoutes(SidebarItems), ...StaticRoutes];
