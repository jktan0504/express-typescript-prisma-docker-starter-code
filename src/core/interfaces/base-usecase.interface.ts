export interface IBaseUseCase<TInput, TOutput> {
	onExecute(input: TInput): Promise<TOutput>
}