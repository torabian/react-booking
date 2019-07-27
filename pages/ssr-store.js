import { BehaviorSubject } from 'rxjs';

export const SSRStore = {
  lang: new BehaviorSubject('en'),
  localisation: new BehaviorSubject('pl')
};
