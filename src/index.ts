import { EventObject, State } from 'xstate';

export function xstateLogger<TContext, TEvents extends EventObject>(
  s: State<
    TContext,
    TEvents,
    any,
    {
      value: any;
      context: TContext;
    }
  >
) {
  console.groupCollapsed(
    '%c event',
    'color: gray; font-weight: lighter;',
    s.event.type
  );
  console.log('%c prev state', 'color: #9E9E9E; font-weight: bold;', s.history);
  console.log('%c event', 'color: #03A9F4; font-weight: bold;', s.event);
  console.log('%c next state', 'color: #4CAF50; font-weight: bold;', s);
  console.groupEnd();
}
