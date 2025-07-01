import { useEffect, useRef } from 'react';
import { SystemIcon } from '../IconPack/SystemIcon';
import { SystemIconTypes } from '../../interfaces/SystemIcon';
import "../../styles/searchField.less";
import { SearchFieldProps } from '../../interfaces/Input/SearchField';
import InputField from './InputField';

export const SearchField = (props: SearchFieldProps) => {
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const dismissSearchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const elClassNames: string = "search-field-wrapper " + (props.className ? props.className : "");

  useEffect(() => {
    searchContainerRef.current?.addEventListener('click', (event: MouseEvent) => {
      if (!dismissSearchRef.current?.contains(event.target as HTMLInputElement)) {
        searchInputRef.current?.focus();
      }
    })
  }, [searchContainerRef]);

  return (
    <div className={elClassNames} ref={searchContainerRef}>
      <InputField
        type={"text"}
        inputFieldRef={searchInputRef}
        value={props.searchString}
        onChange={props.onChange}
        isDisabled={props.isDisabled} />
      <div ref={dismissSearchRef}>
        <SystemIcon className={"dismiss-search-icon"} iconType={SystemIconTypes.X} />
      </div>
    </div>
  );
}