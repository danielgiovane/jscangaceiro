class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._dataInput = $('#data');
    this._quantidadeInput = $('#quantidade');
    this._valorInput = $('#valor');
    this._negociacoes = new Negociacoes();
    this._negociacoesView = new NegociacoesView('#negociacoes');
  }

  adiciona(e) {
    e.preventDefault();
    this._negociacoes.adiciona(this._criaNegociacao());
    this._negociacoesView.update(this._negociacoes);
    this._limpaFormulario();
  }

  _limpaFormulario() {
    this._dataInput.value = '';
    this._quantidadeInput.value = 1;
    this._valorInput.value = 0.0;
    this._dataInput.focus();
  }

  _criaNegociacao() {
    return new Negociacao(DateConverter.paraData(this._dataInput.value),
      parseInt(this._quantidadeInput.value),
      parseFloat(this._valorInput.value));
  }

}