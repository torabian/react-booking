import { BehaviorSubject } from 'rxjs';

export const Store = {
  appointment: new BehaviorSubject({
    slotId: null,
    slotDate: null,
    slotTime: null,
    slotPrice: null,
    slotCapacity: null,
    fullName: null,
    email: null,
    phoneNumber: null,
    address: null,
    zipCode: null
  })
};

export function setAppointment(data) {
  Store.appointment.next({
    ...Store.appointment.value,
    ...data
  });
}

export function getAppointment() {
  return Store.appointment.value;
}
