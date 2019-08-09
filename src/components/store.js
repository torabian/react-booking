import { BehaviorSubject } from 'rxjs';

export const Store = {
  appointment: new BehaviorSubject({
    slotId: null,
    slotDate: null,
    slotTime: null,
    slotPrice: null,
    slotCapacity: null,
    customer_fullname: null,
    customer_email: null,
    customer_phone: null,
    customer_address: null,
    customer_zipCode: null,
    customer_location: null,
    customer_message: null
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
