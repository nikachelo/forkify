import View from './View';
import icons from 'url:../../img/icons.svg';

class paginationView extends View {
  _parentElement = document.querySelector('.pagination');
  //

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (this._data.page === 1 && numPages > 1) {
      return `
            <button data-goto=${
              this._data.page + 1
            } class="btn--inline pagination__btn--next">
                <span>Page ${this._data.page + 1}</span>
                <svg class="search__icon">
                <use href="${icons}icon-arrow-right"></use>
                </svg>
            </button> 
      
      `;
    }

    // Last page
    if (this._data.page === numPages && numPages > 1) {
      return `
            <button <button data-goto=${
              this._data.page - 1
            } class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${this._data.page - 1}</span>
            </button>`;
    }
    // Other page

    if (this._data.page < numPages) {
      return `
            <button <button <button data-goto=${
              this._data.page - 1
            }  class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${this._data.page - 1}</span>
            </button>
            <button <button <button data-goto=${
              this._data.page + 1
            }  class="btn--inline pagination__btn--next">
                <span>Page ${this._data.page + 1}</span>
                <svg class="search__icon">
                <use href="${icons}icon-arrow-right"></use>
                </svg>
            </button> 
      `;
    }
    //Page 1, and there are NO other pages
    return 'End of page <3';
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
}

export default new paginationView();
