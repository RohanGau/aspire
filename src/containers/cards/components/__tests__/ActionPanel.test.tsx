import { render, screen, fireEvent } from '@testing-library/react';
import ActionsPanel from '../ActionsPanel';
import { Skeleton } from 'antd';
import { actionsItems } from '../../../../utils';

// Mock the utils module
jest.mock('../../../../utils', () => ({
  actionsItems: [
    { label: 'Cancel card', icon: 'cancel-icon.png' },
    { label: 'Other action', icon: 'other-icon.png' },
  ],
}));

describe('ActionsPanel', () => {
  const mockOnCancelCardClick = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders skeleton when isFetching is true', () => {
    const { container } = render(
      <ActionsPanel isFetching={true} onCancelCardClick={mockOnCancelCardClick} />
    );

    // Check for Ant Design Skeleton component structure
    const skeletonWrapper = container.querySelector('.ant-skeleton');
    expect(skeletonWrapper).toBeInTheDocument();

    const skeletonButton = container.querySelector('.ant-skeleton-button');
    expect(skeletonButton).toBeInTheDocument();
  });

  it('renders action items when isFetching is false', () => {
    render(<ActionsPanel isFetching={false} onCancelCardClick={mockOnCancelCardClick} />);

    // Verify all action items are rendered
    actionsItems.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();

      // Find the icon by its src attribute since it might not have alt text
      const icons = screen.getAllByRole('img');
      const actionIcon = icons.find((img) => img.getAttribute('src') === item.icon);
      expect(actionIcon).toBeInTheDocument();
    });
  });

  it('calls onCancelCardClick when "Cancel card" action is clicked', () => {
    render(<ActionsPanel isFetching={false} onCancelCardClick={mockOnCancelCardClick} />);

    const cancelCardItem = screen.getByText('Cancel card');
    fireEvent.click(cancelCardItem);

    expect(mockOnCancelCardClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onCancelCardClick when other actions are clicked', () => {
    render(<ActionsPanel isFetching={false} onCancelCardClick={mockOnCancelCardClick} />);

    const otherActionItem = screen.getByText('Other action');
    fireEvent.click(otherActionItem);

    expect(mockOnCancelCardClick).not.toHaveBeenCalled();
  });

  it('applies correct CSS classes', () => {
    const { container } = render(
      <ActionsPanel isFetching={false} onCancelCardClick={mockOnCancelCardClick} />
    );

    expect(container.querySelector('.panelWrapper')).toBeInTheDocument();
    expect(container.querySelectorAll('.actionItem')).toHaveLength(actionsItems.length);
    expect(container.querySelectorAll('.icon')).toHaveLength(actionsItems.length);
    expect(container.querySelectorAll('.label')).toHaveLength(actionsItems.length);
  });
});
