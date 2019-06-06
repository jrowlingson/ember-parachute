import QueryParams from '../query-params';

export default function withParachute(desc) {
  return Object.assign({
    finisher(klass) {
      klass.reopen(new QueryParams().Mixin);

      return klass;
    }
  }, desc);
}
