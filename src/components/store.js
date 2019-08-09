import { BehaviorSubject } from 'rxjs';

export const Store = {
  appointment: new BehaviorSubject([])
};

export function addAppointment(data) {
  const _current = Store.appointment.value;
  const _update = [..._current, data];
  Store.appointment.next(_update);
}

export function setAppointment(module_id, data) {
  console.log(module_id, data);
  const newvalue = [];
  for (let _v of Store.appointment.value) {
    if (_v.module_id === module_id) {
      _v = {
        module_id,
        ..._v,
        ...data
      };
    }
    newvalue.push(_v);
  }
  Store.appointment.next(newvalue);
}

export function getAppointment(module_id) {
  return Store.appointment.value.find(x => x.module_id === module_id);
}
