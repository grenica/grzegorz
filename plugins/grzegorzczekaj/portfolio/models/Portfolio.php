<?php namespace GrzegorzCzekaj\Portfolio\Models;

use Model;

/**
 * Model
 */
class Portfolio extends Model
{
    use \October\Rain\Database\Traits\Validation;
    

    /**
     * @var string The database table used by the model.
     */
    public $table = 'grzegorzczekaj_portfolio_works';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
