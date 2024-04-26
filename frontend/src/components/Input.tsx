import React, { Fragment } from 'react'

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}

interface IInputLabel extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

interface IFloatingLabelInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

interface ITextarea extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  rows: number
}

interface ISelectGroup extends React.FormHTMLAttributes<HTMLFormElement> {}

interface ISelectInput extends React.InputHTMLAttributes<HTMLSelectElement> {
  label?: string
}

interface IOptionInput extends React.InputHTMLAttributes<HTMLInputElement> {
  selected?: boolean
}

interface IFileInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  ref?: React.ForwardedRef<HTMLInputElement>
}

interface ICheckboxInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

interface IRadio extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = ({
  placeholder,
  value,
  onChange,
  className,
  readOnly,
  name,
  type,
  defaultValue,
  autoComplete,
}: IInput) => {
  return (
    <input
      className={`block outline-none w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-700 sm:leading-6 ${className}`}
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
      name={name}
      onChange={onChange}
      type={type}
      defaultValue={defaultValue}
      autoComplete={autoComplete}
      aria-readonly={true}
    />
  )
}

const InputLabel = ({
  placeholder,
  label,
  name,
  type,
  id,
  autoComplete,
  required,
  className,
  onChange,
  value,
  disabled,
  readOnly,
}: IInputLabel) => {
  return (
    <div
      className={`w-full sm:max-w-full md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl ${className}`}>
      <label htmlFor={name} className="block font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-1">
        <input
          value={value}
          placeholder={placeholder}
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required={required}
          onChange={onChange}
          disabled={disabled}
          readOnly={readOnly}
          className="block outline-none w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  )
}

const FloatingLabelInput = ({
  label,
  placeholder,
  value,
  onChange,
  className,
  readOnly,
  name,
}: IFloatingLabelInput) => {
  return (
    <div className={`relative p-4 transition-all ${className}`}>
      <input
        id="floating_input"
        type="text"
        className="peer w-full border-0 focus:p-1 focus:border-0 focus:outline-none focus:placeholder:hidden focus:ring-0"
        placeholder={placeholder}
        value={value}
        name={name}
        readOnly={readOnly}
        onChange={onChange}
      />
      <label
        htmlFor="floating_input"
        className="absolute left-2 top-0 text-gray-500 text-sm transition-all peer-focus:top-1 peer-focus:text-gray-600 peer-focus:text-xs">
        {label}
      </label>
      <div className="absolute top-0 left-0 -z-1 w-full h-full p-4 rounded-lg border border-gray-300 peer-focus:border-2 peer-focus:border-blue-300"></div>
    </div>
  )
}

const SelectGroup = ({ className, children }: ISelectGroup) => {
  return <form className={className}>{children}</form>
}

const Select = ({
  id,
  className,
  children,
  onChange,
  label,
  name,
  value,
}: ISelectInput) => {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-1">
      {label && <label>{label}</label>}
      <select
        value={value}
        name={name}
        id={id}
        className={`w-full h-full outline-none bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 ${className}`}
        onChange={onChange}>
        {children}
      </select>
    </div>
  )
}

const Option = ({ id, className, children, value }: IOptionInput) => {
  return (
    <option id={id} value={value} className={className}>
      {children}
    </option>
  )
}

const File = React.forwardRef<HTMLInputElement, IFileInput>(
  ({ id, onChange, label, name, multiple }, ref) => {
    return (
      <div className="w-full h-full flex flex-col gap-1">
        {label && <label>{label}</label>}
        <input
          onChange={onChange}
          className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
          type="file"
          id={id}
          name={name}
          ref={ref}
          multiple={multiple}
        />
      </div>
    )
  },
)

const Checkbox = ({
  label,
  id,
  name,
  defaultChecked,
  onChange,
  disabled,
}: ICheckboxInput) => {
  return (
    <div className="flex justify-center gap-2">
      <input
        id={id}
        type="checkbox"
        name={name}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
      />
      {label && <label>{label}</label>}
    </div>
  )
}

const Radio = ({
  label,
  name,
  value,
  defaultChecked,
  onChange,
  disabled,
  checked,
}: IRadio) => {
  return (
    <div className="flex justify-center gap-2">
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      {label && <label>{label}</label>}
    </div>
  )
}

const Textarea = ({
  placeholder,
  value,
  onChange,
  className,
  readOnly,
  name,
  type,
  autoComplete,
  rows,
}: ITextarea) => {
  return (
    <textarea
      className={`block outline-none w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-700 sm:leading-6 ${className}`}
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
      name={name}
      onChange={onChange}
      autoComplete={autoComplete}
      rows={rows}
    />
  )
}

Input.Float = FloatingLabelInput
Input.InputLabel = InputLabel
Input.Textarea = Textarea

// Select & Option
Input.SelectGroup = SelectGroup
Input.Select = Select
Input.Option = Option

// File
Input.File = File

// Checkbox
Input.Checkbox = Checkbox

// radio
Input.Radio = Radio

export default Input
