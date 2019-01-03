import { Pipe, PipeTransform } from '@angular/core';
import { conformToMask } from 'angular2-text-mask';
import { maskKoreanLocal } from './utils';

@Pipe({
	name: 'ngxPhoneMask'
})

export class NgxPhoneMaskPipe implements PipeTransform {
	transform(value: string): string {
		if (!value) {
			return '';
		}

		return conformToMask(
			value,
			maskKoreanLocal(),
			{ guide: false }
		).conformedValue;
	}
}
